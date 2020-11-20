/**
 * Image with lazy loading built-in
 */
import * as React from "react";
import { styleFn } from "styled-system";
import { ImageElement } from "./Styled";

export interface ImageProps {
  "data-src"?: string;
  width?: styleFn;
  height?: styleFn;
  imgRef?: React.MutableRefObject<HTMLImageElement | undefined>;
  crossOrigin?: React.ImgHTMLAttributes<any>["crossOrigin"];
}

const Image = (props: any) => {
  const [src, setSrc] = React.useState(
    "data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP88R8AAvUB+VkkrXoAAAAASUVORK5CYII="
  );

  const imgRef: React.MutableRefObject<
    HTMLImageElement | undefined
  > = React.useRef();

  const inview: IntersectionObserverCallback = (entries, observer): void =>
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const imageElement = imgRef!.current!;
        const imgSrc = imageElement.getAttribute("data-src");
        imgSrc && setSrc(imgSrc);
        imageElement.removeAttribute("data-src");
        observer!.unobserve(imageElement);
      }
    });

  React.useEffect(() => {
    const observer: IntersectionObserver = new IntersectionObserver(inview);
    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => imgRef.current && observer.unobserve(imgRef.current);
  }, [imgRef.current]);

  return <ImageElement ref={imgRef} src={src} {...props} />;
};

export default Image;
export { ImageRatio } from "./ImageRatio";
