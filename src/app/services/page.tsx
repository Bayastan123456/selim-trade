"use client";
import Footer from "@/components/Footer/Footer";
import Form from "@/components/Form/Form";
import Navbar from "@/components/navbar/Navbar";
import PageServices from "@/components/ServicesPage/ServicesPage";
import { useEffect, useState } from "react";

export default function ServicesPages() {
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
      <Navbar isMobile={isMobile} />
      <PageServices />
      <Form />
      <Footer />
    </>
  );
}
