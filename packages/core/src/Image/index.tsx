/**
 * Image with lazy loading built-in
 */
import * as React from "react";
import styled from "styled-components";

export const ImageElement = styled.img<ImageProps>`
  max-width: 100%;
  height: auto;
`;
ImageElement.displayName = "ImageElement";

export interface ImageProps extends React.ComponentPropsWithoutRef<"img"> {
  "data-src"?: string;
  width?: string | number;
  height?: string | number;
  imgRef?: React.MutableRefObject<HTMLImageElement | undefined>;
  crossOrigin?: React.ImgHTMLAttributes<any>["crossOrigin"];
  loading?: "lazy" | "eager";
}

const Image = ({ loading = "lazy", ...rest }: ImageProps) => {
  const [src, setSrc] = React.useState(
    "data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP88R8AAvUB+VkkrXoAAAAASUVORK5CYII="
  );

  const imgRef: React.MutableRefObject<any> = React.useRef();

  const inview: IntersectionObserverCallback = (entries, observer): void =>
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const imageElement: HTMLElement | undefined = imgRef.current;
        if (imageElement) {
          const imgSrc: string | null = imageElement.getAttribute("data-src");
          if (imgSrc) {
            setSrc(imgSrc);
            imageElement.removeAttribute("data-src");
            observer!.unobserve(imageElement);
          }
        }
      }
    });

  React.useEffect(() => {
    const observer: IntersectionObserver = new IntersectionObserver(inview);
    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => imgRef.current && observer.unobserve(imgRef.current);
  }, [imgRef.current]);

  return <ImageElement loading={loading} ref={imgRef} src={src} {...rest} />;
};

export default Image;
export { ImageRatio } from "./ImageRatio";
