export interface TestimonialItem {
    id: string;
    image: string;
    name: string;
    text: string;
    time: string;
    peso: string;
    imc: string;
    program: string;
    beforeAfterImage: string;
}

export const TESTIMONIALS_DATA: TestimonialItem[] = [
    {
        id: "juana-perez",
        image: "/img/testimonios/testimonio1.webp",
        name: "Juana Pérez",
        program: "Recomposición Corporal",
        text: "Mi objetivo no era solo bajar de peso, sino transformar mi físico por completo. Con el plan personalizado y el acompañamiento constante, logré perder grasa y aumentar masa muscular. ¡El cambio físico y mental ha sido extraordinario!",
        time: "6 meses",
        peso: "96kg → 82kg",
        imc: "29% → 14%",
        beforeAfterImage: "/img/testimonios/antesYDespues1.avif",
    },
    {
        id: "andres-martinez",
        image: "/img/testimonios/testimonio2.webp",
        name: "Andrés Martínez",
        program: "Hipertrofia Muscular",
        text: "Buscaba ganar fuerza y volumen sin perder movilidad. Gracias a la programación científica y la disciplina guiada, alcancé mi mejor versión física y superé mis marcas en cada levantamiento.",
        time: "8 meses",
        peso: "72kg → 83kg",
        imc: "18% → 11%",
        beforeAfterImage: "/img/testimonios/antesYDespues2.avif",
    },
    {
        id: "carolina-gomez",
        image: "/img/testimonios/testimonio3.webp",
        name: "Carolina Gómez",
        program: "Definición Extrema",
        text: "Más que perder kilos, gané salud, constancia y seguridad en mí misma. Cada entrenamiento me retó a superar mis límites y logré una tonificación que jamás creí posible.",
        time: "5 meses",
        peso: "68kg → 59kg",
        imc: "26% → 15%",
        beforeAfterImage: "/img/testimonios/antesYDespues3.jpg",
    },
    {
        id: "daniela-ramirez",
        image: "/img/testimonios/testimonio4.webp",
        name: "Daniela Ramírez",
        program: "Acondicionamiento Funcional",
        text: "Entrar al gimnasio fue la mejor decisión para mi bienestar. Mejoré mi resistencia, agilidad y vitalidad diaria. Ahora entreno con pasión y los resultados se notan todos los días.",
        time: "7 meses",
        peso: "74kg → 65kg",
        imc: "28% → 16%",
        beforeAfterImage: "/img/testimonios/antesYDespues4.jpg",
    },
];