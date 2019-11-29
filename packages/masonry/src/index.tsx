/**
 * Masonry.tsx
 * Flexbox masonry layout
 * original credit https://codepen.io/golle404/pen/wWoXwz?editors=0110
 */

// TODO: Windowing render
// idea to make it works:
// - Base on intersection observer
// - Check columns height, elements height with intial default value before load
// - Check scroll position compare to "View port" (view port is basically initial container height)
// - Check which items on each column are in "view port"
// - Limit rendering items by index

import React, {
  useRef,
  useEffect,
  MutableRefObject,
  useState,
  ReactElement,
  memo
} from "react";
import { MasonryLayout } from "./Styled";
import { MasonryProps } from "./types";

const Masonry = ({ breakpoints, children, defaultCols = 3 }: MasonryProps) => {
  const [columns, setColumns] = useState(defaultCols);

  const masonryRef: MutableRefObject<any> = useRef();

  // Re-assign children component to right columns
  const mapChildren = () => {
    let col: Array<any> = [];

    for (let i = 0; i < columns; i++) {
      const arr: ReactElement[] = [];
      col.push(arr);
    }

    return children.reduce((accumulator, currentValue, currentIndex) => {
      accumulator[currentIndex % columns].push(currentValue);

      return accumulator;
    }, col);
  };

  let columnRefs: any = {};

  useEffect(() => {
    // Divide columns based on container width
    // Use breakpoint length as initial value
    const getColumns = (width: number) => {
      return (
        breakpoints.reduceRight((pVal, cVal, idx) => {
          return cVal < width ? pVal : idx;
        }, breakpoints.length) + 1
      );
    };

    const onResize = () => {
      const Columns = getColumns(masonryRef.current.offsetWidth);
      if (Columns !== columns) {
        setColumns(Columns);
      }
    };
    // set colums and resize colums
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [columns, breakpoints]);

  return (
    <MasonryLayout ref={masonryRef}>
      {mapChildren().map((col: ReactElement[], i: number) => {
        return (
          <div
            className="msr_col"
            key={i}
            ref={colRef => (columnRefs[i] = colRef)}
          >
            {col.map((child: ReactElement, i: number) => {
              return (
                <span className="msr_item" key={i}>
                  {child}
                </span>
              );
            })}
          </div>
        );
      })}
    </MasonryLayout>
  );
};

export default memo(Masonry);

export { MasonryProps };
