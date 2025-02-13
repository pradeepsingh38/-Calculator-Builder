import { useDrop } from "react-dnd";
import useCalculatorStore from "../store/index";

const DropZone = () => {
  const { components, addComponent, removeComponent } = useCalculatorStore();

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "COMPONENT",
    drop: (item) => addComponent(item), 
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <div
      ref={drop}
      className={`min-h-[225px] p-4 border-2 border-dashed ${
        isOver ? "border-blue-500 bg-blue-100" : "border-gray-300"
      }`}
    >
      {components.length === 0 && <p className="text-gray-500">Drop components here</p>}
      <div className="grid grid-cols-4 gap-2 mt-2">
        {components.map((comp) => (
          <button
            key={comp.id} 
            className="p-2 border rounded bg-gray-400"
            onClick={() => removeComponent(comp.id)} 
          >
            {comp.label} ❌
          </button>
        ))}
      </div>
    </div>
  );
};

export default DropZone;
