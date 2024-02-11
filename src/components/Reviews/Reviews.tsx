"use client";
import React, { useState } from "react";
import scss from "./Reviews.module.scss";
import Image from "next/image";
import icon1 from "../../assets/reviews/icon1.svg";
import icon2 from "../../assets/reviews/icon2.svg";
import icon3 from "../../assets/reviews/icon3.svg";
import icon4 from "../../assets/reviews/icon4.svg";
import vector1 from "../../assets/reviews/vectorLeft.svg";
import vector2 from "../../assets/reviews/vectorRidht.svg";
import ReusableComponent from "../ReusableComponent/ReusableComponent";

const Reviews = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 4;
  const reviewsData = [
    {
      icon: icon1,
      name: "Закир Сагындыков",
      title: "ворота атоматические",
      comment:
        "Ворота стоят уже более двух лет. За это время с ними не было никаких проблем. Спасибо, Selim Trade!",
    },
    {
      icon: icon2,
      name: "Закир Сагындыков",
      title: "ворота атоматические",
      comment:
        "Ворота стоят уже более двух лет. За это время с ними не было никаких проблем. Спасибо, Selim Trade!",
    },
    {
      icon: icon3,
      name: "Закир Сагындыков",
      title: "ворота атоматические",
      comment:
        "Ворота стоят уже более двух лет. За это время с ними не было никаких проблем. Спасибо, Selim Trade!",
    },
    {
      icon: icon4,
      name: "Закир Сагындыков",
      title: "ворота атоматические",
      comment:
        "Ворота стоят уже более двух лет. За это время с ними не было никаких проблем. Спасибо, Selim Trade!",
    },
    {
      icon: icon3,
      name: "Закир Сагындыков",
      title: "ворота атоматические",
      comment:
        "Ворота стоят уже более двух лет. За это время с ними не было никаких проблем. Спасибо, Selim Trade!",
    },
    {
      icon: icon4,
      name: "Закир Сагындыков",
      title: "ворота атоматические",
      comment:
        "Ворота стоят уже более двух лет. За это время с ними не было никаких проблем. Спасибо, Selim Trade!",
    },
  ];

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = reviewsData.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber: number) => {
    if (
      pageNumber > 0 &&
      pageNumber <= Math.ceil(reviewsData.length / itemsPerPage)
    ) {
      setCurrentPage(pageNumber);
    }
  };
  // console.log(currentPage);

  const dataReviewsMap = React.useMemo(
    () =>
      currentItems.map((item, index) => (
        <div className={scss.reviews__card} key={index}>
          <div className={scss.reviews__icon}>
            <Image
              src={item.icon}
              alt="error"
              className={scss.reviews__image}
            />
            <div className={scss.reviews__title}>
              <p>{item.name}</p>
              <p>{item.title}</p>
            </div>
          </div>
          <p>{item.comment}</p>
        </div>
      )),
    [currentItems]
  );

  return (
    <div className={scss.reviews__container}>
      <ReusableComponent title="Отзывы наших клиентов">
        <div className={scss.reviews__blok}>{dataReviewsMap}</div>
        <div className={scss.reviews__vectors}>
          <Image
            src={vector1}
            alt="error"
            width={50}
            style={{ cursor: "pointer" }}
            onClick={() => paginate(currentPage - 1)}
            className={scss.reviewsVec1}
          />
          <Image
            src={vector2}
            alt="error"
            width={50}
            className={scss.reviewsVec1}
            onClick={() => paginate(currentPage + 1)}
          />
        </div>
      </ReusableComponent>
    </div>
  );
};

export default Reviews;
