import { Text } from "@/src/components/ui";
import { fetchMenu } from "@/src/common/data/footer-data";

export async function Menu() {
  const menuData = await fetchMenu();
  return (
    <>
      {menuData.map((item) => (
        <div key={item.id}>
          <Text
            as="h6"
            size="lg"
            className="uppercase font-bold text-[10px] mb-4"
          >
            {item.title}
          </Text>
          <ul className="gap-3 flex flex-col">
            {item.submenu.map((menu) => (
              <li key={menu.label}>
                <Text size="sm" weight="light" as="span">
                  {menu.label}
                </Text>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
}
