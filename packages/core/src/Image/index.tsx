/**
 * Image with lazy loading functionally
 */
import React, { useState, useEffect, MutableRefObject, useRef } from "react";
import { ImageElement } from "./Styled";

const Image = (props: any) => {
  const [src, setSrc] = useState(
    "data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP88R8AAvUB+VkkrXoAAAAASUVORK5CYII="
  );

  const imgRef: MutableRefObject<Element | undefined> = useRef();

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

  useEffect(() => {
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
