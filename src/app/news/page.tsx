"use client";
import Footer from "@/components/Footer/Footer";
import Form from "@/components/Form/Form";
import Navbar from "@/components/navbar/Navbar";
import OurNewsPageInside from "@/components/OurNewsPage/OurNewsPage";
import { useEffect, useState } from "react";

export default function OurNewsPage() {
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
    <>
      <Navbar isMobile={isMobile} />
      <OurNewsPageInside />
      <Form />
      <Footer />
    </>
  );
}
