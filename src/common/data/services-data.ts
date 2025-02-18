import { Service } from "@/src/common/types/data.types";

export const fetchService = async () => {
  const service: Service[] = [
    {
      id: 1,
      title: "Hair Loss",
      description: "Hair loss needn't be irreversible. We can help!",
      details:
        "We're working around the clock to bring you a holistic approach to your wellness. From top to bottom, inside and out.",
      image: "/assets/images/hair.webp",
    },
    {
      id: 2,
      title: "Erectile Dysfunction",
      description: "Erections can be a tricky thing. But no need to feel down!",
      details:
        "We’re working around the clock to bring you a holistic approach to your wellness. From top to bottom, inside and out.",
      image: "/assets/images/erectile.webp",
    },
  ];

  return service;
};
