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
import Main_advantages from "@/components/Main_advantages/Main_advantages";

export default function Home() {
  return (
    <>
      <div className="main_back">
        {/* <Navbar />
        <Main /> */}
      </div>
      {/* <OurTeam />
      <LastNews />
      <Advantages />
      <Offers />
      <OurWorks />
      <Service />
      <Reviews /> */}
      <Main_advantages />

      <div className="form_back">
        {/* <Form />
        <Footer /> */}
      </div>
    </>
  );
}
