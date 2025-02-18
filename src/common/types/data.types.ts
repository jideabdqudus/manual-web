export interface FooterMenu {
  id: string;
  title: string;
  submenu: Submenu[];
}

export interface Submenu {
  label: string;
  href: string;
}

export interface Socials {
  name: "Facebook" | "Google" | "Twitter";
  href: string;
  Icon: React.FC;
}
