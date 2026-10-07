export interface NavItem {
  name: string;
  url: string;
  key: string;
}

export const NAV_ITEMS: NavItem[] = [
  {
    name: "Sobre mí",
    url: "#sobre-mi",
    key: "sobre-mi",
  },
  {
    name: "Programas",
    url: "#programas",
    key: "programas",
  },

  {
    name: "Testimonios",
    url: "#testimonios",
    key: "testimonios",
  },
];
