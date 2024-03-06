import scss from "./OurNewsPage.module.scss";
import { newsData } from "@/api/ournews";
import { useMemo } from "react";
import Link from "next/link";
import Image from "next/image";

<<<<<<< HEAD
const OurNewsPageInside = () => {
  const dataNewsMap = useMemo(
    () =>
      newsData?.map(({ id, title, image }) => (
        <div key={id} className={scss.Newspage__images}>
          <Link href={`ourworks/${id}`}>
            <Image src={image} alt="error" className={scss.Newspage__image} />
          </Link>

          <div className={scss.Newspage_text_inner}>
            <p>{title}</p>
          </div>
        </div>
      )),
    []
  );
=======
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
              <Link href={`ourworks/${id}`}>
                <Image src={image} alt="error" className={scss.Newspage__image} />
              </Link>
    
              <div className={scss.Newspage_text_inner}>
                <p>{title}</p>
              </div>
            </div>
          )),
        []
      );
>>>>>>> ee85d00689643d5c546c289818ba4d1e95b28451
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
      </div>
    </div>
  );
};

export default OurNewsPageInside;
