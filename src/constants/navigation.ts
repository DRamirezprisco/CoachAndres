export interface NavItem {
    name: string;
    url: string;
    key: string;
}

export const NAV_ITEMS: NavItem[] = [
    {
        name: "Sobre mí",
        url: "/Sobremí",
        key: "Sobremí",
    },
    {
        name: "Programas",
        url: "/Programas",
        key: "Programas",
    },

    {
        name: "Métodos",
        url: "/Métodos",
        key: "Métodos",
    },
    {
        name: "Planes",
        url: "/Planes",
        key: "Planes",
    },
    {
        name: "Testimonios",
        url: "/testimonios",
        key: "testimonios",
    },
    {
        name: "Contactame",
        url: "/Contactame",
        key: "Contactame",
    },
];
