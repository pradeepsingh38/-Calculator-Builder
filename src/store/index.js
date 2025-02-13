import { create } from "zustand";
import { persist } from "zustand/middleware";

const useCalculatorStore = create(
  persist(
    (set) => ({
      components: [],
      darkMode: false,
      history: [],
      future: [],

      addComponent: (component) =>
        set((state) => {
          const newState = {
            ...state,
            components: [...state.components, { ...component, id: Date.now() }],
            history: [...state.history, state.components],
            future: [],
          };
          return newState;
        }),

      removeComponent: (id) =>
        set((state) => {
          const newState = {
            ...state,
            components: state.components.filter((comp) => comp.id !== id),
            history: [...state.history, state.components],
            future: [],
          };
          return newState;
        }),

      toggleDarkMode: () =>
        set((state) => ({
          darkMode: !state.darkMode,
        })),

      undo: () =>
        set((state) => {
          if (state.history.length === 0) return state;
          const previous = state.history[state.history.length - 1];
          return {
            ...state,
            components: previous,
            history: state.history.slice(0, -1),
            future: [state.components, ...state.future],
          };
        }),

      redo: () =>
        set((state) => {
          if (state.future.length === 0) return state;
          const next = state.future[0];
          return {
            ...state,
            components: next,
            history: [...state.history, state.components],
            future: state.future.slice(1),
          };
        }),
    }),
    {
      name: "calculatorState",
      getStorage: () => localStorage,
    }
  )
);

export default useCalculatorStore;