"use client";
import React, { FC, useState, useEffect, useRef } from "react";
import scss from "./Navbar.module.scss";
import logo from "../../assets/navbar/logo.svg";
import logo1 from "../../assets/navbar/logo1.svg";
import phone from "../../assets/navbar/Vector.svg";
import menu from "../../assets/navbar/menu.svg";
import Link from "next/link";
import Image from "next/image";

const Navbar: FC = () => {
  const menuItems = [
    { title: "главная", url: "/" },
    { title: "услуги", url: "/services" },
    { title: "новости", url: "/news" },
    { title: "наши работы", url: "/workspage" },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef<HTMLUListElement>(null);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        closeModal();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <nav className={scss.navb}>
      <div className={scss.navbar}>
        <div className={scss.nav__container}>
          <Link href="/">
            <Image src={logo} alt="logo" className={scss.nav__logo} />
          </Link>

          {/* Кнопка открытия модального бургер-меню */}
          <button className={scss.burgerButton} onClick={openModal}>
            <Image src={menu} alt="menu" />
          </button>

          <ul
            className={`${scss.nav__ul} ${isOpen ? scss.modal_open : ""}`}
            ref={modalRef}
          >
            {menuItems.map((item, index) => (
              <li key={index} className={scss.nav__li}>
                <Link href={item.url}>{item.title}</Link>
              </li>
            ))}
          </ul>

          <div className={scss.nav__adress}>
            <p>г. Бишкек</p>
            <p>+996 (552) 57 07 55</p>
          </div>
        </div>
      </div>

      {/* Модальное окно */}
      <ul
        className={`${scss.nav__modal} ${isOpen ? scss.modal_open : ""}`}
        ref={modalRef}
      >
        <Image src={logo1} alt="err" />
        <ul>
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link href={item.url}>{item.title}</Link>
            </li>
          ))}
          <p>г. Бишкек </p>
          <div className={scss.modal__phone}>
            <Image src={phone} alt="err" width={10} />
            <p>+996 (552) 57 07 55</p>
          </div>
        </ul>
      </ul>
    </nav>
  );
};

export default Navbar;
