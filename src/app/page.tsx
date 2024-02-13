import Advantages from "@/components/Advantages/Advantages";
import OurWorks from "@/components/OurWorks/OurWorks";
import OurTeam from "@/components/OurTeam/OurTeam";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import Form from "@/components/Form/Form";
export default function Home() {
  return (
    <>
      <div className="main_back">
        <Navbar />
        <Main />
      </div>
      <OurTeam />
      <LastNews />
      <div className="form_back">
      <Form/>
        <Footer/>
      </div>
    </>
  );
}
