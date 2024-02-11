import React from "react";
import scss from "./Main.module.scss";
import Button from "../ReusableButton/Button";
const Main = () => {
  return (
    <div className={scss.main}>
      <div className="container">
        <div className={scss.main__text}>
          <h1>Современная и надёжная защита</h1>
          <p>Найдите идеальный вариант сами или предоставьте это нам</p>
          <Button title={"заказать ворота"} img />
        </div>
      </div>
    </div>
  );
};

export default Main;
