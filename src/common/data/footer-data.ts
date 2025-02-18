import { FooterMenu, Socials } from "@/src/common/types/data.types";
import { FacebookIcon, GoogleIcon, TwitterIcon } from "@/src/components/icons";

export const fetchMenu = async () => {
  const menu: FooterMenu[] = [
    {
      id: "1",
      title: "Product",
      submenu: [
        { label: "Popular", href: "#" },
        { label: "Trending", href: "#" },
        { label: "Guided", href: "#" },
        { label: "Products", href: "#" },
      ],
    },
    {
      id: "2",
      title: "Company",
      submenu: [
        { label: "Press", href: "#" },
        { label: "Mission", href: "#" },
        { label: "Strategy", href: "#" },
        { label: "About", href: "#" },
      ],
    },
    {
      id: "3",
      title: "Info",
      submenu: [
        { label: "Support", href: "#" },
        { label: "Customer Service", href: "#" },
        { label: "Get Started", href: "#" },
      ],
    },
  ];

  return menu;
};

export const fetchSocials = async () => {
  const socials: Socials[] = [
    {
      name: "Facebook",
      href: "https://www.facebook.com/MenofManual",
      Icon: FacebookIcon,
    },
    {
      name: "Google",
      href: "https://twitter.com/MenofManual",
      Icon: GoogleIcon,
    },
    {
      name: "Twitter",
      href: "https://www.instagram.com/menofmanual/",
      Icon: TwitterIcon,
    },
  ];

  return socials;
};
