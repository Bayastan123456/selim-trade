"use client";
import React, { useState } from "react";
import style from "./OurWorks.module.scss";
import ReusableComponent from "@/components/ReusableComponent/ReusableComponent";
import Image from "next/image";
import image1 from "../../assets/OurWorks/image1.png";
import image2 from "../../assets/OurWorks/image2.png";
import image3 from "../../assets/OurWorks/image3.png";
import leftArr from "../../assets/OurWorks/leftArrow.png";
import rightArr from "../../assets/OurWorks/rightArrow.png";

const OurWorks = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const images = [image1, image2, image3];
  const totalImages = images.length;

  const prevImage = () => {
    const newIndex = currentIndex === 0 ? totalImages - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextImage = () => {
    const newIndex = currentIndex === totalImages - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const orderedImages = [
    ...images.slice(currentIndex),
    ...images.slice(0, currentIndex),
  ];

  return (
    <div className={style.carousel}>
      <ReusableComponent title={"Наши работы"}>
        <div className={style.carouselInner}>
          <div className={style.mainPicture}>
            <div
              className={`${style.imageButton} ${style.left}`}
              onClick={prevImage}
            >
              <Image src={leftArr} alt="leftArrow" width={45} height={45} />
            </div>
            {orderedImages.map((img, index) => (
              <div key={index} className={style.imageWrapper}>
                <Image
                  src={img}
                  alt={`ourworks${index + 1}`}
                  width={index === 1 ? 431 : 361}
                  height={index === 1 ? 439 : 432}
                  onClick={() => {
                    if (index === 0) {
                      prevImage();
                    } else if (index === totalImages - 1) {
                      nextImage();
                    }
                  }}
                />
              </div>
            ))}
            <div
              className={`${style.imageButton} ${style.right}`}
              onClick={nextImage}
            >
              <Image src={rightArr} alt="rightArrow" width={45} height={45} />
            </div>
          </div>
        </div>
      </ReusableComponent>
    </div>
  );
};

export default OurWorks;
