import scss from "./OurNewsPage.module.scss";
import { newsData } from "@/api/ournews";
import { useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "../ReusableButton/Button";

interface Data {
  id: any;
  title: any;
  image: any;
}

const OurNewsPageInside = () => {
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
          <h1>Новости компании</h1>
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
