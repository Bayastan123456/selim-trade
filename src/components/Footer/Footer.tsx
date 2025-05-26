import React, { FC, useMemo } from "react";
import scss from "./Footer.module.scss";
import logo from "../../assets/Footer/logo.png";
import insta from "../../assets/Footer/instagram.png";
import whatsapp from "../../assets/Footer/wa.png";
import map from "../../assets/Footer/map.png";
import map2 from "../../assets/Footer/map380.png";
import Link from "next/link";
import Image from "next/image";

const current_year = new Date().getFullYear();

const Footer: FC = () => {
  const menuItems = [
    { title: "Главная", url: "/" },
    { title: "О нас", url: "/workspage" },
    { title: "Услуги", url: "/services" },
    { title: "Работы", url: "/workspage" },
    { title: "Отзывы", url: "/#section1" },
    { title: "Новости", url: "/news" },
  ];
  const menuItemsMap = useMemo(
    () =>
      menuItems.map((item, index) => (
        <li key={index}>
          <Link href={item.url}>{item.title}</Link>
        </li>
      )),
    []
  );

  return (
    <footer className={scss.footer}>
      <div className={scss.footer__inner}>
        <div className={scss.footer__container}>
          <div className={scss.left_side}>
            <Image className={scss.image_logo} src={logo} alt="logo" width={100} />
            <p className={scss.socialText}>СОЦИАЛЬНЫЕ СЕТИ</p>
            <div className={scss.social}>
              <Link
                href="https://www.instagram.com/selimtrade/"
                target="__blank"
              >
                <Image src={insta} alt="instagram" width={36} />
              </Link>
              <Link
                href="https://api.whatsapp.com/send/?phone=996552570755&text&type=phone_number&app_absent=0"
                target="__blank"
              >
                <Image src={whatsapp} alt="whatsapp" width={36} />
              </Link>
            </div>
          </div>
          <ul className={scss.footer__ul}>{menuItemsMap}</ul>
          <div className={scss.contacts}>
            <div className={scss.up_side}>
              <p>РЕЖИМ РАБОТЫ</p>
              <p>Пн-Пт 8:30–18:30</p>
              <p>Суббота 8:30–14:00</p>
            </div>
            <div className={scss.down_side}>
              <p>ТЕЛЕФОН</p>
              <a href="tel:+996552570755">+996 (552) 57 07 55</a>
              <a href="tel:+996500888051">+996 (500) 88 80 51</a>
              <a href="tel:+996772327676">+996 (772) 32 76 76</a>
            </div>
          </div>
          <div className={scss.maps_navigation}>
            <Link
              href="https://www.google.com/maps/place/selim.kg/@42.848181,74.587368,17z/data=!3m1!4b1!4m6!3m5!1s0x389ec9d8319b4ead:0x35283f9b848f49a!8m2!3d42.848181!4d74.587368!16s%2Fg%2F11gdkx3jh6?entry=ttu"
              target="__blank"
            >
              <Image className={scss.map1} src={map} alt="navigation" width={580} />
              <Image className={scss.map2} src={map2} alt="navigation" width={130} />
            </Link>
          </div>
        </div>
      </div>
      <div className={scss.footerStripe}>
        <p>
          © {current_year} Selim Trade. Данный сайт защищён от копирования.
          Любая передача данных в интернете запрещена.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
