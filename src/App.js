import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import NumberButton from "./components/NumberButton";
import DropZone from "./components/DropZone";
import Calculator from "./components/Calculator";
import useCalculatorStore from "./store";

function App() {
  const { toggleDarkMode, darkMode, undo, redo } = useCalculatorStore();

  return (
    <DndProvider backend={HTML5Backend}>
      <div
        className={`${
          darkMode ? "dark bg-gray-900 text-white" : "bg-white text-black"
        } flex flex-col items-center gap-4 p-6 min-h-screen`}
      >
        <h1 className="text-xl font-bold text-center">
          Drag & Drop Calculator Builder
        </h1>
        <button
          className="p-2 border rounded bg-gray-500 text-white"
          onClick={toggleDarkMode}
        >
          Toggle Dark Mode
        </button>
        <div className="flex gap-2">
          <button
            className="p-2 border rounded bg-yellow-500 text-white"
            onClick={undo}
          >
            Undo
          </button>
          <button
            className="p-2 border rounded bg-green-500 text-white"
            onClick={redo}
          >
            Redo
          </button>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 w-full">
          <NumberButton />
          <DropZone />
        </div>

        <Calculator />
      </div>
    </DndProvider>
  );
}

export default App;
