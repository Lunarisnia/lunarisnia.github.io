import "./Card.css";
import type React from "react";

export const Card: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className={"card-body"}>
      {children}
    </div>
  );
};
