
import React from "react";
import scss from "./Form.module.scss";
import ReusableComponent from "../ReusableComponent/ReusableComponent";
import Button from "../ReusableButton/Button";
const Form = () => {
  return (
    <div className={scss.form}>
      <ReusableComponent title="ОСТАЛИСЬ ВОПРОСЫ?">
        <div className={scss.form__wrapper}>
          <form>
            <div className={scss.form__top}>
              <input type="text" placeholder="имя" className={scss.input} />
              <input type="number" placeholder="телефон" />
              <Button title="оставить зявку" />
            </div>
            <textarea  placeholder="сообщение" />
          </form>
        </div>
      </ReusableComponent>
    </div>
  );
};

export default Form;
