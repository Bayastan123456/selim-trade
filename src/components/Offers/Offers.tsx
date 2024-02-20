import React from "react";
import Image from "next/image";
import scss from "./Offers.module.scss";
import ReusableComponent from "../ReusableComponent/ReusableComponent";
import img1 from "/src/assets/Offers/image_1.jpg";
import img3 from "/src/assets/Offers/image_3.jpg";
import img2 from "/src/assets/Offers/image_2.jpg";
import img4 from "/src/assets/Offers/image_4.jpg";
import img5 from "/src/assets/Offers/image_5.jpg";

const Offers: React.FC = () => {
  return (
    <div className={scss.offers_bg}>
      <ReusableComponent title="Мы предлагаем">
        <div className={scss.images}>
          <div className={scss.img_col_left}>
            <Image
              src={img1}
              alt="img"
              width={480}
              height={250}
              className={scss.img1}
            />
            <div className={scss.btn_section}>
              <a href="/">Секционные</a>
            </div>
            <Image
              src={img3}
              alt="img"
              width={480}
              height={250}
              className={scss.img2}
            />
            <div className={scss.btn_section}>
              <a href="/">Распашные</a>
            </div>
          </div>
          <div className={scss.img_col_center}>
            <Image
              src={img2}
              alt="img"
              width={383}
              height={258}
              className={scss.img3}
            />
            <div className={scss.btn_section}>
              <a href="/">Автоматика</a>
            </div>
            <Image
              src={img4}
              alt="img"
              width={383}
              height={258}
              className={scss.img4}
            />
            <div className={scss.btn_section}>
              <a href="/">Складные</a>
            </div>
          </div>
          <div className={scss.img_col_right}>
            <Image
              src={img5}
              alt="img"
              width={394}
              height={544}
              className={scss.img5}
            />
            <div className={scss.btn_section}>
              <a href="/">Роль ворота</a>
            </div>
          </div>
        </div>
        <div className="btn_blue">
          <button className={scss.see_all}>Смотреть все</button>
        </div>
      </ReusableComponent>
    </div>
  );
};

export default Offers;
