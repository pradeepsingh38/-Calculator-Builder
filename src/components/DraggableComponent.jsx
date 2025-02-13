import { useDrag } from "react-dnd";

const DraggableComponent = ({ type, label }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "COMPONENT",
    item: { type, label },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      className={`p-2 border bg-red-400 rounded shadow-md cursor-grab ${
        isDragging ? "opacity-50" : "opacity-100"
      }`}
    >
      {label}
    </div>
  );
};

export default DraggableComponent;
