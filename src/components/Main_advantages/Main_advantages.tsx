import React from "react";
import ReusableComponent from "../ReusableComponent/ReusableComponent";
import style from "./Main_advantages.module.scss";

const Main_advantages: React.FC = () => {
  return (
    <div className={style.content}>
      <ReusableComponent title="Основные преимущества">
        <div className={style.text__block_1}>
          <div className={style.text__block_1_block_1}>
            <h3 className={style.text__block_titles}>ПРОМЫШЛЕННЫЙ МАСШТАБ</h3>
            <p className={style.text__block_desc}>
              Данная серия ворот спроектирована специально для перекрытия
              больших проёмов на промышленных объектах.
            </p>
          </div>
          <div className={style.text__block_1_block_2}>
            <h3 className={style.text__block_titles}>
              ВЫСОКИЙ УРОВЕНЬ ТЕРМОИЗОЛЯЦИИ
            </h3>
            <p className={style.text__block_desc}>
              Промышленные ворота ISD01 применяются для термоизоляции помещений
              с высокой интенсивностью использования.
            </p>
          </div>
          <div className={style.text__block_1_block_3}>
            <h3 className={style.text__block_titles}>ОПТИМАЛЬНОЕ РЕШЕНИЕ</h3>
            <p className={style.text__block_desc}>
              Благодаря высоким эксплуатационным качествам ворота DoorHan
              являются оптимальным решением для любых объектов.
            </p>
          </div>
        </div>
        <div className={style.text__block_2}>
          <div className={style.text__block_2_block_1}>
            <h3 className={style.text__block_titles}>ЭЛЕГАНТНЫЙ ВНЕШНИЙ ВИД</h3>
            <p className={style.text__block_desc}>
              Несмотря на то, что серия предназначена для промышленного
              применения, она обладает широким выбором дазайна.
            </p>
          </div>
          <div className={style.text__block_2_block_2}>
            <h3 className={style.text__block_titles}>БЕЗОПАСНОСТЬ</h3>
            <p className={style.text__block_desc}>
              Многоуровневая система безопасности включает: устройства защиты
              от обрыва пружины и от разрыва троса, которые защищают полотно
              от непреднамеренного падения.
            </p>
          </div>
          <div className={style.text__block_2_block_3}>
            <h3 className={style.text__block_titles}>НАДЁЖНОСТЬ</h3>
            <p className={style.text__block_desc}>
              Использование усиленных комплектующих обеспечивает повышенную
              надёжность конструкции в процессе эксплуатации.
            </p>
          </div>
        </div>
      </ReusableComponent>
    </div>
  );
};

export default Main_advantages;
