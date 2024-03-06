import React from "react";
import { newsData } from "@/api/ournews";
import NewsPageSection from "@/components/OurNewsPage/NewsPage/NewsPage";
import Navbar from "@/components/navbar/Navbar";
import Form from "@/components/Form/Form";
import Footer from "@/components/Footer/Footer";

export default function NewsPagesPage({ params }: { params: { id: string } }) {
  // console.log(params);

  function findObjectById(id: number) {
    for (var i = 0; i < newsData.length; i++) {
      if (newsData[i].id === id) {
        return newsData[i];
      }
    }
    return null;
  }

  const res = findObjectById(Number(params.id));
  console.log(res);

  return (
    <div>
      <Navbar />
      {res && (
        <NewsPageSection id={res.id} image={res.image} text={res.title} />
      )}
      <Form />
      <Footer />
    </div>
  );
}
