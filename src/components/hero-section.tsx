import Link from "next/link";
import Image from "next/image";
import { Button } from "@/src/components/ui/button";
import { Text } from "@/src/components/ui/typography";

export const HeroSection = () => {
  return (
    <section>
      <div className="min-h-[600px] md:min-h-[750px] bg-primary lg:bg-[url('/assets/images/hero-bg.webp')] bg-cover flex justify-center items-center md:block md:items-start md:justify-start">
        <div className="px-4 lg:px-8">
          <div className="w-[90%] md:w-[80%] mx-auto pt-8">
            <div>
              <Link href="https://www.manual.co/" target="_blank">
                <Image
                  src="/assets/images/logo.svg"
                  width={40}
                  height={40}
                  alt="Manual Logo"
                />
              </Link>
            </div>
            <div className="mt-4 md:mt-32 md:w-[60%] lg:w-[43%]">
              <Text size="lg" weight="normal" className="text-6xl lg:text-8xl">
                Be good to yourself
              </Text>
              <br />
              <Text size="lg" weight="light">
                We’re working around the clock to bring you a holistic approach
                to your wellness. From top to bottom, inside and out.
              </Text>
              <Button className="my-8">TAKE THE QUIZ</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
