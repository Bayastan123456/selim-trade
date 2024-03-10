"use client";
import Advantages from "@/components/Advantages/Advantages";
import LastNews from "@/components/LastNews/LastNews";
import Offers from "@/components/Offers/Offers";
import OurTeam from "@/components/OurTeam/OurTeam";
import OurWorks from "@/components/OurWorks/OurWorks";
import Main from "@/components/Main/Main";
import Navbar from "@/components/navbar/Navbar";
import Form from "@/components/Form/Form";
import Footer from "@/components/Footer/Footer";
import Service from "@/components/Service/Service";
import Reviews from "@/components/Reviews/Reviews";
import { useEffect, useState } from "react";

export default function Home() {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1200);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="main_back">
        <Navbar isMobile={isMobile} />
        <Main />
      </div>
      <OurTeam />
      <LastNews />
      <Advantages />
      <Offers />
      <OurWorks />
      <Service />

      <div className="form_back">
        <Reviews />
        <Form />
        <Footer />
      </div>
    </>
  );
}
