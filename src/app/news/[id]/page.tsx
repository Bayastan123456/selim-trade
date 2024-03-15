"use client";
import React, { useEffect, useState } from "react";
import { newsData } from "@/api/ournews";
import NewsPageSection from "@/components/OurNewsPage/NewsPage/NewsPage";
import Navbar from "@/components/navbar/Navbar";
import Form from "@/components/Form/Form";
import Footer from "@/components/Footer/Footer";
import SimilarNews from "@/components/OurNewsPage/SimilarNews/SimilarNews";

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

  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      const isMobileQuery = window.matchMedia("(max-width: 1200px)");
      setIsMobile(isMobileQuery.matches);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <Navbar isMobile={isMobile} />
      {res && (
        <NewsPageSection id={res.id} image={res.image} text={res.title} />
      )}
      <SimilarNews />
      <Form />
      <Footer />
    </div>
  );
}
