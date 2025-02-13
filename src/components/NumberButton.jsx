import DraggableComponent from "./DraggableComponent";

const NumberButton = () => {
  const buttons = [
    { label: "1", type: "number" },
    { label: "2", type: "number" },
    { label: "3", type: "number" },
    { label: "+", type: "operator" },
    { label: "4", type: "number" },
    { label: "5", type: "number" },
    { label: "6", type: "number" },
    { label: "-", type: "operator" },
    { label: "7", type: "number" },
    { label: "8", type: "number" },
    { label: "9", type: "number" },
    { label: "*", type: "operator" },
    { label: "0", type: "number" },
    { label: "/", type: "operator" },
  ];

  return (
    <div className="grid grid-cols-4 gap-2 p-4 border">
      {buttons.map((btn, index) => (
        <DraggableComponent key={index} {...btn} />
      ))}
    </div>
  );
};

export default NumberButton;
