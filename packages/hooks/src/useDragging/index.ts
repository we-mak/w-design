/**
 * useDragging
 * hooks handle drag item
 */
import * as React from "react";

export default () => {
  const initState = {
    isDragging: false,

    originalX: 0,
    originalY: 0,

    translateX: 0,
    translateY: 0,

    lastTranslateX: 0,
    lastTranslateY: 0
  };
  // metric distances of target dragging
  const [dragState, setDragState] = React.useState(initState);

  const handleDragStart = (e: MouseEvent | React.MouseEvent | DragEvent | React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();

    window.removeEventListener("mousemove", handleDragMove);
    window.removeEventListener("mouseup", handleDragEnd);

    return setDragState({
      ...dragState,
      isDragging: true,
      originalX: e.clientX,
      originalY: e.clientY
    });
  };

  const handleTouchStart = (e: TouchEvent | React.TouchEvent) => {
    e.preventDefault();
    e.stopPropagation();

    window.removeEventListener("touchmove", handleTouchMove, false);
    window.removeEventListener("touchend", handleDragEnd, false);

    const touch = e.touches[0];

    return setDragState({
      ...dragState,
      isDragging: true,
      originalX: touch.clientX,
      originalY: touch.clientY
    });
  };

  const handleDragMove = React.useCallback(
    (e: MouseEvent | DragEvent | React.MouseEvent | React.DragEvent) => {
      e.preventDefault();
      e.stopPropagation();

      if (!dragState.isDragging) return;

      return setDragState({
        ...dragState,
        translateX: e.clientX - dragState.originalX + dragState.lastTranslateX,
        translateY: e.clientY - dragState.originalY + dragState.lastTranslateY
      });
    },
    [dragState]
  );

  const handleTouchMove = React.useCallback(
    (e: TouchEvent | React.TouchEvent) => {
      e.preventDefault();
      e.stopPropagation();

      if (!dragState.isDragging) return;

      const touch = e.touches[0];

      return setDragState({
        ...dragState,
        translateX: touch.clientX - dragState.originalX + dragState.lastTranslateX,
        translateY: touch.clientY - dragState.originalY + dragState.lastTranslateY
      });
    },
    [dragState]
  );

  const handleDragEnd = React.useCallback(
    (e: any) => {
      e.preventDefault();
      e.stopPropagation();

      window.removeEventListener("mousemove", handleDragMove);
      window.removeEventListener("mouseup", handleDragEnd);
      window.removeEventListener("touchmove", handleTouchMove, false);
      window.removeEventListener("touchend", handleDragEnd, false);

      return setDragState({
        ...dragState,
        isDragging: false,
        originalX: 0,
        originalY: 0,
        lastTranslateX: dragState.translateX,
        lastTranslateY: dragState.translateY
      });
    },
    [dragState, handleDragMove, handleTouchMove]
  );

  React.useEffect(() => {
    return () => {
      window.removeEventListener("mousemove", handleDragMove);
      window.removeEventListener("mouseup", handleDragEnd);
      window.removeEventListener("touchmove", handleTouchMove, false);
      window.removeEventListener("touchend", handleDragEnd, false);
    };
  }, [handleDragMove, handleDragEnd, handleTouchMove]);

  return {
    dragState,
    handleDragStart,
    handleDragMove,
    handleDragEnd,
    handleTouchStart,
    handleTouchMove
  };
};
