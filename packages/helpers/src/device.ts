// TOUCH
// react:
// "onTouchStart",
// "onTouchMove",
// "onTouchEnd"
// native:
// "touchstart",
// "touchmove",
// "touchend"
// MOUSE
// react:
//  "onMouseDown",
//  "onDragOver",
//  "onMouseMove",
//  "onMouseUp"
// native:
//  "mousedown",
//  "dragStart",
//  "mousemove",
//  "mouseup"

export const isTouchDevice = !!(
  typeof window !== "undefined" &&
  typeof navigator !== "undefined" &&
  ("ontouchstart" in window || navigator.msMaxTouchPoints > 0)
);
