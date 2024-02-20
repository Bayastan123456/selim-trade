import React, { FC, useState } from "react";
import scss from "./Navbar.module.scss";
import logo from "../../assets/navbar/logo.svg";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

const Navbar: FC = () => {
  const menuItems = [
    { title: "главная", url: "/" },
    { title: "услуги", url: "/services" },
    { title: "новости", url: "/news" },
    { title: "наши работы", url: "/WeWork" },
  ];
  return (
    <nav className={scss.nav}>
      <div className={scss.navbar}>
        <div className={scss.nav__container}>
          <Image src={logo} alt="logo" width={100} height={100} />

          <ul className={scss.nav__ul}>
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link href={item.url}>{item.title}</Link>
              </li>
            ))}
          </ul>
          <div className={scss.nav__adress}>
            <p>г. Бишкек</p>
            <p>+996 (552) 57 07 55</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
