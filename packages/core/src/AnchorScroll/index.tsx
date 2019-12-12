/**
 * AnchorScroll
 * Smooth scrolling when click at an anchor link
 */
import React, {
  FC,
  useState,
  useEffect,
  SyntheticEvent,
  ReactChild,
  ReactChildren
} from "react";
import { GlobProps } from "../../../types/typings";
import Button from "../Button";

export interface AnchorScrollProps extends GlobProps {
  destination: string | number; // id or position of target
  children: ReactChild | ReactChildren;
  duration?: number; //scroll duration time, default by 200
  easing?: Function; // easing function
  margin?: number; // addition or subtraction scroll target point
  top?: number; // addition height based on fixed menu height
  callback?: Function; //callback function after scrolled
}

const AnchorScroll: FC<AnchorScrollProps> = ({
  duration = 300,
  easing = (t: number) => t, // linear easing
  margin = 0,
  top = 0,
  children,
  destination,
  callback
}) => {
  const [isActive, setActive] = useState(false);

  const scrollToDestination = (e: SyntheticEvent) => {
    e.preventDefault();

    // Initial position of window and time
    const start = window.pageYOffset;
    const startTime =
      "now" in window.performance ? performance.now() : new Date().getTime();

    // Take height of window and document to resolve max scrollable value
    const documentHeight = Math.max(
      document.body.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.clientHeight,
      document.documentElement.scrollHeight,
      document.documentElement.offsetHeight
    );
    const windowHeight =
      window.innerHeight ||
      document.documentElement.clientHeight ||
      document.getElementsByTagName("body")[0].clientHeight;

    // Get destination offset
    const destinationOffset =
      typeof destination === "number"
        ? destination
        : document.getElementById(destination)!.offsetTop;

    // Calculating target offset
    const scrollTarget = Math.round(
      documentHeight - destinationOffset < windowHeight
        ? documentHeight - windowHeight + margin
        : destinationOffset + margin
    );

    if ("requestAnimationFrame" in window === false) {
      // If requestAnimationFrame is not supported
      // Move window to destination position and trigger callback function
      window.scroll(0, scrollTarget);
      if (callback) {
        callback();
      }
      return;
    }

    const scroll = () => {
      const now =
        "now" in window.performance ? performance.now() : new Date().getTime();
      const time = Math.min(1, (now - startTime) / duration);
      const timeFunction = easing(time);
      window.scroll(
        0,
        Math.ceil(timeFunction * (scrollTarget - start) + start)
      );

      if (window.pageYOffset === scrollTarget) {
        if (callback) {
          callback();
        }
        return;
      }
      requestAnimationFrame(scroll);
    };
    // Execute scroll
    scroll();
  };

  useEffect(() => {
    const onActive = () => {
      if (typeof destination !== "number") {
        const node = document.getElementById(destination);
        // error to prevent missing target id
        if (!node) {
          throw new Error(`Anchor destination: "${destination}" not found`);
        }

        const destinationBounding = node.getBoundingClientRect();
        // active button when reaches the target
        if (
          destinationBounding.top <= 0 + top - margin &&
          destinationBounding.bottom >= 0 + top - margin
        ) {
          setActive(true);
        } else {
          setActive(false);
        }
      }
      return;
    };

    onActive();
    window.addEventListener("scroll", onActive);
    return () => {
      window.removeEventListener("scroll", onActive);
    };
  }, [destination, margin, top]);

  return (
    <Button
      isSelected={isActive}
      appearance="clean"
      size="sm"
      onClick={scrollToDestination}
    >
      {children}
    </Button>
  );
};

export default AnchorScroll;
