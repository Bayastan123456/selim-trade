import React from "react";
import scss from "./SectionDoor.module.scss";
import Image, { StaticImageData } from "next/image";

interface DataImages {
  id: number;
  image: StaticImageData;
  text: string;
}
const SectionDoor = ({ image, text, id }: DataImages) => {
  return (
    <div key={id}>
      <div className={scss.sectionDoor__container}>
        <Image src={image} alt="error" className={scss.sectionDoor__image} />
        <h2>{text}</h2>
      </div>
      <p className={scss.sectionDoor__text}>
        Промышленные секционные ворота DoorHan устанавливаются в проёмы
        производственных зданий, складских помещений, цехов, терминалов и прочих
        промышленных объектов, где они должны отвечать гораздо более жёстким
        требованиям, в отличие от гаражных ворот. Так как промышленные ворота
        эксплуатируются с высокой интенсивностью, для обеспечения долгосрочной
        работы без сбоев, они обладают повышенной износостойкостью за счёт
        применения специальных технологий. Используемая в воротах система
        уплотнителей обеспечивает высокую термоизоляцию — сохранение требуемого
        температурного режима является важной задачей практически для любого
        промышленного объекта.
      </p>
    </div>
  );
};

export default SectionDoor;
