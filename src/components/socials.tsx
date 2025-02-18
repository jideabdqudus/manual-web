import Link from "next/link";
import { Text } from "@/src/components/ui";
import { fetchSocials } from "@/src/common/data/footer-data";

export async function Socials() {
  const socialsData = await fetchSocials();
  return (
    <div>
      <Text as="h6" className="uppercase font-bold text-[10px] mb-4">
        Follow
      </Text>
      <div className="flex space-x-6">
        {socialsData.map(({ name, href, Icon }) => (
          <Link key={name} href={href} target="__blank">
            <span className="sr-only">{name}</span>
            <Icon />
          </Link>
        ))}
      </div>
    </div>
  );
}
