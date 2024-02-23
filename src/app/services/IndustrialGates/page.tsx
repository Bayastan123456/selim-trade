import Footer from "@/components/Footer/Footer";
import Form from "@/components/Form/Form";
import Navbar from "@/components/navbar/Navbar";
import IndustrialGatesPage from "@/components/IndustrialGates/IndustrialGates";
import TypesOfGates from "@/components/TypesofGates/TypesOfGates";
export function IndustrialGatePageInside() {
  return (
    <>
      <Navbar />
      <IndustrialGatesPage />
      <TypesOfGates />
      <Form />
      <Footer />
    </>
  );
}

export default IndustrialGatePageInside;
