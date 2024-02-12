import React, { ReactNode } from "react";
import scss from "./ReusableComponent.module.scss";

interface Type {
  children: ReactNode;
  title: string;
}
const ReusableComponent = ({ title, children }: Type) => {
  return (
    <div className={scss.component}>
      <div className={scss.component__container}>
        <h1>{title}</h1>
        {children}
      </div>
    </div>
  );
};

export default ReusableComponent;
