"use client";
import { servicesData } from "@/api/services";
import SectionDoor from "@/components/ServiceDetails/SectionDoor/SectionDoor";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

export async function getStaticPaths() {
  const paths = servicesData.map((service) => ({
    params: { id: service.id.toString() },
  }));

  return { paths, fallback: true };
}

function ServiceDetailsPage() {
  const router = useRouter();
  const { id } = router.query;
  const [cardDetails, setCardDetails] = useState(servicesData);

  useEffect(() => {
    // Получите данные карточки по id из вашего источника данных (API, база данных и т. д.)
    // Например, здесь вы можете использовать id для запроса к API и получения информации о карточке
    const fetchCardDetails = async () => {
      try {
        const response = await fetch(`/services/${id}`);
        const data = await response.json();
        setCardDetails(data); // Устанавливаем детали карточки в состояние
      } catch (error) {
        console.error("Failed to fetch card details:", error);
      }
    };

    if (id) {
      fetchCardDetails();
    }
  }, [id]);

  if (!cardDetails) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      {servicesData.map((item) => (
        <SectionDoor
          id={item.id}
          image={item.image}
          text={item.text}
          key={item.id}
        />
      ))}
    </div>
  );
}

export default ServiceDetailsPage;
