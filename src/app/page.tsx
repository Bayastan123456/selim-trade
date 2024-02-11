import Advantages from "@/components/Advantages/Advantages";
import OurWorks from "@/components/OurWorks/OurWorks";
import OurTeam from "@/components/OurTeam/OurTeam";
import Service from "@/components/Service/Service";
import Reviews from "@/components/Reviews/Reviews";
import Navbar from "@/components/navbar/Navbar";
import Form from "@/components/Form/Form";
import LastNews from "@/components/LastNews/LastNews";
import Main from "@/components/Main/Main";
export default function Home() {
  return (
    <>
      <div className="main_back">
        <Navbar />
        <Main />
      </div>
      <OurTeam />
      <Advantages />
      <LastNews />
      <OurWorks />
      <Service />
      <div className="form_back">
        <Reviews />
        <Form />
      </div>
    </>
  );
}
