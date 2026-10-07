export interface ContactInfo {
    name: string;
    slogan: string;
    sloganSecondary: string;
    description: string;
    phone: string;
    phoneTel: string;
    whatsappNumber: string;
    whatsappUrl: string;
    email: string;
    emailMailto: string;
    developer: DeveloperInfo;
}

export interface DeveloperInfo {
    name: string;
    whatsappUrl: string;
}

export const SITE_CONFIG: ContactInfo = {
    name: "Andrés Sastoque · Entrenador Personal",
    slogan: "¡Mi prioridad es que entrenes con intención, con seguridad y con un plan que puedas sostener en el tiempo!",
    sloganSecondary: "¡Juntos somos más fuertes!",
    description:
        "",

    phone: "3158361031",
    phoneTel: "tel:3158361031",
    whatsappNumber: "573223139467",
    whatsappUrl: "https://wa.me/573158361031",
    email: "Gymtabaku@gmail.com",
    emailMailto: "mailto:Gymtabaku@gmail.com",

    developer: {
        name: "Daniela Ramirez",
        whatsappUrl: "https://wa.me/573223139467",
    },
};