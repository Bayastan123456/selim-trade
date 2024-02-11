import Advantages from "@/components/Advantages/Advantages";
import OurWorks from "@/components/OurWorks/OurWorks";
import OurTeam from "@/components/OurTeam/OurTeam";
import Footer from "@/components/Footer/Footer";
import Form from "@/components/Form/Form";
export default function Home() {
  return (
    <>
    <OurTeam/>
      <Advantages />
      <OurWorks />
      <Form/>
      <Footer/>
    </>
  );
}
