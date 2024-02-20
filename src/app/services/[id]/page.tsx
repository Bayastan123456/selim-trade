import { servicesData } from "@/api/services";
import Main_advantages from "@/components/ServiceDetails/Main_advantages/Main_advantages";
import SectionDoor from "@/components/ServiceDetails/SectionDoor/SectionDoor";
import Navbar from "@/components/navbar/Navbar";
import React from "react";

export default function ServiceDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  // console.log(params);

  function findObjectById(id: number) {
    for (var i = 0; i < servicesData.length; i++) {
      if (servicesData[i].id === id) {
        return servicesData[i];
      }
    }
    return null;
  }

  const res = findObjectById(Number(params.id));
  // console.log(res);

  return (
    <div>
      <Navbar />
      {res && <SectionDoor id={res.id} image={res.image} text={res.title} />}
      <Main_advantages />
    </div>
  );
}