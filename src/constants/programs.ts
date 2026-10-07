export interface ProgramItem {
  id: string;
  category: string;
  tag: string;
  image: string;
  level: string;
  intensity: string;
  intensityBars: number;
  duration: string;
  frequency: string;
  title: string;
  description: string;
  highlights: string[];
  badgeColor: string;
  menu: string;
  precio: number;
}

export const PROGRAMS_DATA: ProgramItem[] = [
  {
    id: "hypertrophy",
    category: "hipertrofia",
    tag: "HIPERTROFIA PURA",
    image: "/img/programas/hypertrophy.webp",
    level: "Intermedio / Avanzado",
    intensity: "5/5",
    intensityBars: 5,
    duration: "12 a 16 Semanas",
    frequency: "4 - 5 Días / Sem",
    title: "Hipertrofia Pro & Densidad Muscular",
    description:
      "Protocolo diseñado para maximizar el volumen de series efectivas y la tensión mecánica sin fatigarte el sistema nervioso central.",
    highlights: [
      "Mesociclos de periodización ondulante diaria",
      "Selección de ejercicios según tus palancas anatómicas",
      "Estrategias de nutrición en superávit hipercalórico limpio",
      "Monitoreo semanal de volumen efectivo por grupo muscular",
    ],
    badgeColor: "bg-primary text-basic-900",
    menu: "Hipertrofia",
    precio: 180,
  },
  {
    id: "fatloss",
    category: "definicion",
    tag: "DEFINICIÓN RÁPIDA",
    image: "/img/programas/definition.webp",
    level: "Todos los Niveles",
    intensity: "4/5",
    intensityBars: 4,
    duration: "8 a 12 Semanas",
    frequency: "4 Días / Sem",
    title: "Definición & Recomposición Acelerada",
    description:
      "Reduce el porcentaje graso hasta marcar abdominales y vascularidad, mientras preservas cada gramo de músculo construido.",
    highlights: [
      "Déficit calórico calculado con refeeds estratégicos",
      "Cardio en zonas de intensidad optimizadas para EPOC",
      "Mantenimiento de cargas pesadas en ejercicios básicos",
      "Estrategias saciantes para erradicar la ansiedad por comida",
    ],
    badgeColor: "bg-basic-50 text-basic-900",
    menu: "Definición",
    precio: 350,
  },
  {
    id: "functional",
    category: "funcional",
    tag: "RENDIMIENTO ATLÉTICO",
    image: "/img/programas/funcional.webp",
    level: "Principiante a Avanzado",
    intensity: "4/5",
    intensityBars: 4,
    duration: "12 Semanas",
    frequency: "3 - 4 Días / Sem",
    title: "Fuerza Funcional & Atletismo Integral",
    description:
      "Desarrolla potencia explosiva, estabilidad de zona media (core) y movilidad articular completa. Físico atlético, ágil y resistente a lesiones.",
    highlights: [
      "Entrenamiento de patrones de movimiento primarios",
      "Acondicionamiento con kettlebells, poleas y autocarga",
      "Incremento drástico de VO2 Max y resistencia al lactato",
      "Movilidad articular dinámica previa a cada sesión",
    ],
    badgeColor: "bg-basic-800 text-primary border border-primary/40",
    menu: "Funcional",
    precio: 450,
  },
  {
    id: "vip",
    category: "vip",
    tag: "EXCLUSIVIDAD TOTAL",
    image: "/img/programas/vip.webp",
    level: "Profesionales y Atletas",
    intensity: "5/5",
    intensityBars: 5,
    duration: "Mensual Renovable",
    frequency: "Personalizada",
    title: "Coaching 1-a-1 VIP Presencial & Híbrido",
    description:
      "La experiencia de preparación definitiva. Sesiones privadas conmigo en sala de pesas y monitoreo continuo las 24 horas del día.",
    highlights: [
      "Supervisión presencial de técnica en cada levantamiento",
      "Línea de WhatsApp prioritaria los 7 días de la semana",
      "Ajustes nutricionales continuos para viajes y eventos",
      "Auditorías biomecánicas y tests de fuerza mensuales",
    ],
    badgeColor: "bg-primary text-basic-900",
    menu: "Coaching VIP",
    precio: 750,
  },
];
