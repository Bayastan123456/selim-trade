import Footer from "@/components/Footer/Footer";
import Form from "@/components/Form/Form";
import Navbar from "@/components/navbar/Navbar";
import PageServices from "@/components/ServicesPage/ServicesPage";


export function ServicesPage() {
  return (
    <>
      <Navbar />
      <PageServices/>
      <Form />
      <Footer />
    </>
  );
}

export default ServicesPage;
