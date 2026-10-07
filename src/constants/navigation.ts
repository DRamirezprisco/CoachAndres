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
    name: "Métodos",
    url: "#metodos",
    key: "metodos",
  },
  {
    name: "Planes",
    url: "#planes",
    key: "planes",
  },
  {
    name: "Testimonios",
    url: "#testimonios",
    key: "testimonios",
  },
];
