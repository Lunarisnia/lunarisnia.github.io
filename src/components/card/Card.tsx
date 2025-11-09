import styles from "./Card.module.css";
import type React from "react";

export const Card: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className={styles.cardBody}>
      {children}
    </div>
  );
};
