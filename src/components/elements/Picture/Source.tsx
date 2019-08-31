/**
 *
 */
import React, { useState, useEffect, MutableRefObject, useRef } from "react";

export const Source = (props: any) => {
  const [src, setSrc] = useState(
    "data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP88R8AAvUB+VkkrXoAAAAASUVORK5CYII="
  );

  const sourceRef: MutableRefObject<Element | undefined> = useRef();

  const inview: IntersectionObserverCallback = (entries, observer): void =>
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const imageElement = sourceRef!.current!;
        const imgSrc = imageElement.getAttribute("data-srcset");
        imgSrc && setSrc(imgSrc);
        imageElement.removeAttribute("data-srcset");
        observer!.unobserve(imageElement);
      }
    });

  useEffect(() => {
    const observer: IntersectionObserver = new IntersectionObserver(inview);
    if (sourceRef.current) {
      observer.observe(sourceRef.current);
    }

    return () => observer.unobserve(sourceRef!.current!);
  }, [sourceRef.current]);

  return <source ref={sourceRef} srcSet={src} {...props} />;
};
