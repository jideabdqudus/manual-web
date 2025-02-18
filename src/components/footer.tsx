import Image from "next/image";
import { Text } from "@/src/components/ui";
import { Menu } from "@/src/components/menu";
import { getCurrentYear } from "@/src/lib/utils";
import { Socials } from "@/src/components/socials";

export const Footer = () => {
  return (
    <div className="bg-primary-light">
      <div className="container-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 py-14 md:py-16 lg:py-[72px]">
          <div className="md:col-span-2 mb-6 md:mb-0">
            <Image
              src="/assets/images/logo.svg"
              width={50}
              height={50}
              alt="Manual Logo"
            />
          </div>
          <Menu />
          <Socials />
        </div>
        <div className="py-8 border-t border-primary text-center">
          <Text className="text-primary-hex text-[16px]" weight="light">
            &copy; {getCurrentYear()} Manual. All rights reserved.
          </Text>
        </div>
      </div>
    </div>
  );
};
