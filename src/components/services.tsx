import Image from "next/image";
import { Text } from "@/src/components/ui";
import { fetchService } from "@/src/common/data/services-data";
export async function Services() {
  const services = await fetchService();
  return (
    <>
      {services.map((service, index) => (
        <div
          key={service.id}
          className={`flex flex-col items-center md:flex-row mt-[70px] mb-[90px] ${
            index % 2 === 0 ? "" : "md:flex-row-reverse"
          }`}
        >
          <div
            className={`hidden md:block absolute text-[200px] lg:text-[450px] text-[#F3F7F4] -z-10 overflow-hidden ${
              index % 2 === 0
                ? "md:right-[26%] 2xl:right-[31%] 4xl:hidden"
                : "md:left-[20%]  2xl:left-[23%] 4xl:hidden"
            }`}
          >
            {`0${service.id}`}
          </div>
          <Image
            src={service.image}
            width={370}
            height={445}
            alt={service.title}
          />
          <div
            className={`mt-4 md:mt-0 relative flex flex-col text-center md:text-left justify-center  ${
              index % 2 === 0
                ? "md:ml-8 lg:ml-32"
                : "md:mr-8 md:pr-4  lg:mr-32 lg:pr-10"
            }`}
          >
            <Text
              as="h5"
              className="uppercase opacity-70 tracking-[0.15em] pb-3 text-[10px]"
              size="xs"
              weight="bold"
            >
              {service.title}
            </Text>
            <Text as="h2" size="md" className="text-[28px]">
              {service.description}
            </Text>
            <Text as="p" weight="light" className="pt-5 text-[18px]">
              {service.details}
            </Text>
          </div>
        </div>
      ))}
    </>
  );
}
