import React, { useMemo } from "react";
import scss from "./Advantages.module.scss";
import Image from "next/image";
import ReusableComponent from "@/components/ReusableComponent/ReusableComponent";
import logo1 from "../../assets/Advantages/logo1.png";
import logo2 from "../../assets/Advantages/logo2.png";
import logo3 from "../../assets/Advantages/logo3.png";
import logo4 from "../../assets/Advantages/logo4.png";
import logo5 from "../../assets/Advantages/logo5.png";


const Advantages = () => {
  const AdvantagesData = [
    {
      title: " Бесплатный выезд специалиста для замеров",
      icon: logo1,
    },
    {
      title: " Многолетний опыт работы",
      icon: logo2,
    },

    {
      title: " Минимальные сроки производства",
      icon: logo3,
    },
    {
      title: "Высокая квалификация сотрудиков",
      icon: logo4,
    },
    {
      title: "Постгарантийное обслуживание и ремонт",
      icon: logo5,
    },
  ];
  const iconData = useMemo(
    () =>
      AdvantagesData.map((item, index) => (
        <div key={index} className={scss.service__card}>
          <Image src={item.icon} alt="icon" width={50} height={50} />
          <p>{item.title}</p>
        </div>
      )),
    []
  );

  return (
    <div className={scss.service__container}>
      <ReusableComponent title="Сервис">
        <div className={scss.service__blok}>{iconData}</div>
      </ReusableComponent>
    </div>
  );
};

// const Advantages = () => {
//   return (
//     <div className={style.advantages}>
//       <ReusableComponent title={"Наши преимущества"}>
//         <div className={style.advantages__text}>
//           <div className={style.advantages__text_desc}>
//             <ul>
//               <li>
//                 <div className={`${style.cards}`}>
//                   <Image src={logo1} alt="logo" width={70} height={70} />
//                   <p>Бесплатный выезд специалиста для замеров</p>
//                 </div>
//               </li>
//               <li>
//                 <div className={`${style.cards}`}>
//                   <Image src={logo2} alt="logo" width={80} height={80} />
//                   <p>Многолетний опыт работы</p>
//                 </div>
//               </li>
//               <li>
//                 <div className={`${style.cards}`}>
//                   <Image src={logo3} alt="logo" width={70} height={70} />
//                   <p>Минимальные сроки производства</p>
//                 </div>
//               </li>
//               <li>
//                 <div className={`${style.cards}`}>
//                   <Image src={logo4} alt="logo" width={70} height={70} />
//                   <p>Высокая квалификация сотрудиков</p>
//                 </div>
//               </li>
//               <li>
//                 <div className={`${style.cards}`}>
//                   <Image src={logo5} alt="logo" width={70} height={70} />
//                   <p>Постгарантийное обслуживание и ремонт</p>
//                 </div>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </ReusableComponent>
//     </div>
//   );
// };

export default Advantages;
