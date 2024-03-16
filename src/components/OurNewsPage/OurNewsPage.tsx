"use client";
import scss from "./OurNewsPage.module.scss";
import { newsData } from "@/api/ournews";
import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface Data {
  id: any;
  title: any;
  image: any;
}

const OurNewsPageInside = () => {
  //   const [data, setData] = useState(null);

  //   useEffect(() => {
  //     const fetchData = async () => {
  //       try {
  //         const response = await fetch('https://selim-trade-2edf3d5543ca.herokuapp.com/swagger-ui/index.html#/News/getLastNews');
  //         const jsonData = await response.json();
  //         setData(jsonData);
  //       } catch (error) {
  //         console.error('Error fetching data:', error);
  //       }
  //     };

  //     fetchData();
  //   }, []);

  const dataNewsMap = useMemo(
    () =>
      newsData?.map(({ id, title, image }: Data) => (
        <div key={id} className={scss.Newspage__images}>
          <Link href={`news/${id}`}>
            <Image src={image} alt="error" className={scss.Newspage__image} />
          </Link>

          <div className={scss.Newspage_text_inner}>
            <p>{title}</p>
          </div>
        </div>
      )),
    []
  );
  return (
    <div>
      <div className={scss.news}>
        <div className={scss.news__text}>
          <h2>Новости компании</h2>
          <div className={scss.news__text_desc}>
            <h4>
              К вашему вниманию здесь мы собрали все актуальные новости нашей
              компании
            </h4>
          </div>
        </div>
        <div className={scss.cards}>{dataNewsMap}</div>
        <button>загрузить ещё</button>
      </div>
    </div>
  );
};

export default OurNewsPageInside;
