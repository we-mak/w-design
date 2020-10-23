import { useDragging } from "@w-design/hooks";

export const UseDragging = () => {
  const {
    dragState: { translateY, translateX },
    handleDragStart,
    handleDragMove,
    handleDragEnd,
    handleTouchStart,
    handleTouchMove
  } = useDragging();

  return (
    <div
      onMouseDown={handleDragStart}
      onMouseMove={handleDragMove}
      onMouseUp={handleDragEnd}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleDragEnd}
      style={{
        width: 100,
        height: 100,
        borderRadius: "50%",
        background: "teal",
        position: "relative",
        textAlign: "center",
        userSelect: "none",
        left: translateX,
        top: translateY
      }}
    >
      <div>
        DragState:
        <div>X: {translateX}</div>
        <div>Y: {translateY}</div>
      </div>
    </div>
  );
};
