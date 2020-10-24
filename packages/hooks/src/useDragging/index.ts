/**
 * useDragging
 * hooks handle drag item
 */
import * as React from "react";
import { isTouchDevice } from "@w-design/helpers";

export type EventType = React.TouchEvent | React.MouseEvent | MouseEvent | TouchEvent;

export interface DraggingState {
  isDragging: boolean;
  startX: number | null; // start x position
  startY: number | null; // start y position
  x: number | null; // current x position while dragging
  y: number | null; // current y position while dragging
  latestX: number | null; // latest x position when done drag
  latestY: number | null; // latest y position when done drag
}

export interface UseDraggingType {
  dragState: DraggingState;
  handleDragStart: (e: EventType) => void;
  handleDragMove: (e: EventType) => void;
  handleDragEnd: () => void;
}

const useDragging = (): UseDraggingType => {
  const initState: DraggingState = {
    isDragging: false,
    startX: null,
    startY: null,
    x: null,
    y: null,
    latestX: null,
    latestY: null
  };

  // metric distances of target dragging
  const [dragState, setDragState] = React.useState<DraggingState>(initState);

  const handleDragStart = (e: EventType) => {
    e = e || window.event;
    // if e is a touch event, preventDefault keeps
    // corresponding mouse events from also being fired later.
    e.preventDefault();

    setDragState({
      ...dragState,
      isDragging: true
    });
  };

  const handleDragMove = (e: EventType) => {
    if (!dragState.isDragging) return;

    e = e || window.event;
    // stop scrolling on iOS Safari
    e.preventDefault();

    const { targetTouches } = e as React.TouchEvent;
    const { clientX, clientY } = e as React.MouseEvent;
    const x: number = targetTouches ? targetTouches[0].pageX : clientX;
    const y: number = targetTouches ? targetTouches[0].pageY : clientY;

    setDragState({ ...dragState, x, y });
  };

  const handleDragEnd = () => {
    if (dragState.isDragging) {
      setDragState({ ...dragState, isDragging: false });
    }
  };

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const thirdArgument = { passive: false };
      if (isTouchDevice) {
        window.addEventListener("touchmove", handleDragMove, thirdArgument);
        window.addEventListener("touchend", handleDragEnd, thirdArgument);
      }
      window.addEventListener("mousemove", handleDragMove, thirdArgument);
      window.addEventListener("mouseup", handleDragEnd, thirdArgument);
    }

    return () => {
      if (isTouchDevice) {
        window.removeEventListener("touchmove", handleDragMove, false);
        window.removeEventListener("touchend", handleDragEnd, false);
      }
      window.removeEventListener("mousemove", handleDragMove, false);
      window.removeEventListener("mouseup", handleDragEnd, false);
    };
  }, [dragState, handleDragMove, handleDragEnd]);

  return {
    dragState,
    handleDragStart,
    handleDragMove,
    handleDragEnd
  };
};

export default useDragging;
