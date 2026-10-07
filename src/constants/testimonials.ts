export interface TestimonialItem {
    image: string;
    name: string;
    text: string;
    time: string;
    peso: string;
    imc: string;
    program: string;

}

export const TESTIMONIALS_DATA: TestimonialItem[] = [
    {
        image: "/img/testimonios/testimonio1.webp",
        name: "Maria Rodriguez",
        program: "hipertrofia",
        text: "En solo 4 meses logré bajar 4 kg de forma saludable y constante. Lo que más me gustó fue el acompañamiento de los profesores y el ambiente tan familiar del gimnasio. Hoy me siento con más energía, confianza y motivación para seguir avanzando",
        time: "3 meses",
        peso: "96kg-91kg",
        imc: "30%-27%",
    },
    {
        image: "/img/testimonios/testimonio2.webp",
        name: "Andres Martinez",
        program: "hipertrofia",
        text: "No buscaba resultados rápidos, buscaba un cambio real. En 4 meses logré bajar 4 kg, sentirme más saludable y recuperar la confianza en mí mismo. Lo mejor ha sido contar con un equipo que siempre está dispuesto a apoyar y motivar",
        time: "3 meses",
        peso: "96kg-91kg",
        imc: "30%-27%",
    },
    {
        image: "/img/testimonios/testimonio3.webp",
        name: "Carolina Perez",
        program: "definicion",
        text: "Más que perder kg, gané salud, disciplina y confianza. Cada entrenamiento me acercó a mis objetivos y me hizo sentir mejor conmigo, baje mas de 10 kg y hoy me siento bien",
        time: "5 meses",
        peso: "96kg-91kg",
        imc: "30%-27%",
    },
    {
        image: "/img/testimonios/testimonio4.webp",
        name: "Ewduar Gomez",
        program: "funcional",
        text: "Entrar al gimnasio fue una de las mejores decisiones que tomé este año. En 4 meses bajé 4 kg, mejoré mi resistencia y recuperé hábitos que había dejado de lado. Cada entrenamiento me acercó un poco más a mis metas.",
        time: "7 meses",
        peso: "96kg-91kg",
        imc: "30%-27%",
    },
    {
        image: "/img/testimonios/testimonio5.webp",
        name: "Daniela Ramirez",
        program: "definicion",
        text: "Logré bajar 4 kg de manera saludable y mejorar mi condición física. El acompañamiento de los entrenadores y el ambiente del gimnasio fueron clave para mantener la constancia. Hoy me siento más fuerte, con más energía y motivada para seguir avanzando",
        time: "9 meses",
        peso: "96kg-91kg",
        imc: "30%-27%",
    },
];