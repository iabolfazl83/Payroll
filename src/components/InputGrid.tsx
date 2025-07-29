import React from "react";

interface InputGridProps {
  columns: number;
  children: React.ReactNode;
}

const InputGrid: React.FC<InputGridProps> = ({ columns, children }) => {
  return (
    <div
      className={`grid gap-6 w-full ${columns === 3 ? "grid-cols-3" : "grid-cols-2"}`}
    >
      {children}
    </div>
  );
};

export default InputGrid;
