import { Text } from "@/src/components/ui";
import { Services } from "@/src/components/services";

export const ServicesSection = () => {
  return (
    <section>
      <div className="pt-20 px-4 lg:px-8">
        <div className="container mx-auto text-center max-w-4xl">
          <Text
            as="h1"
            size="lg"
            weight="normal"
            className="text-3xl lg:text-[40px]"
          >
            What we can help with
          </Text>
          <Services />
        </div>
      </div>
    </section>
  );
};
