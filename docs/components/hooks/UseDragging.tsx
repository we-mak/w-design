import { Box } from "@w-design/core";
import { useDragging } from "@w-design/hooks";

export const UseDragging = () => {
  const {
    dragState: { isDragging, x, y },
    handleDragStart,
    handleDragMove,
    handleDragEnd
  } = useDragging();

  return (
    <Box>
      DragState:
      <ul>
        <li>Dragging: {isDragging.toString()}</li>
        <li>Mouse X position: {x}</li>
        <li>Mouse Y position: {y}</li>
      </ul>
      <div
        onMouseDown={handleDragStart}
        onMouseMove={handleDragMove}
        onMouseUp={handleDragEnd}
        onTouchStart={handleDragStart}
        onTouchMove={handleDragMove}
        onTouchEnd={handleDragEnd}
        style={{
          width: 100,
          height: 100,
          borderRadius: "50%",
          background: "teal",
          position: "relative",
          textAlign: "center",
          userSelect: "none"
        }}
      ></div>
    </Box>
  );
};
