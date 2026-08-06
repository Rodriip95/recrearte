export const NAVIGATION = [
  { label: "Inicio", href: "/#inicio" },
  { label: "Sobre Flora", href: "/#sobre-flora" },
  { label: "Servicios", href: "/#servicios" },
  { label: "Galería", href: "/#galeria" },
  { label: "Catálogo", href: "/catalogo" },
  { label: "Contacto", href: "/#contacto" },
] as const;

export const SOCIAL_LINKS = {
  whatsapp: "https://wa.me/5491138175039",
  instagram: "", // TODO: agregar URL real
} as const;

export const SITE_CONTENT = {
  hero: {
    eyebrow: "FLORA · EVENTOS FLORALES",
    title: "Momentos que florecen",
    subtitle: "Decoración floral, souvenirs y detalles únicos, hechos a mano para tus celebraciones.",
    description: "Cada propuesta se diseña con sensibilidad y una mirada en los pequeños detalles que hacen inolvidable un momento.",
    primaryCta: "Quiero crear mi evento",
    secondaryCta: "Ver trabajos",
  },
  about: {
    eyebrow: "SOBRE FLORA",
    title: "Soy Florencia, la persona detrás de Flora.",
    intro: "Este proyecto nació hace más de tres años, cuando empecé creando piezas de decoración para el hogar, movida por el amor por las flores, los detalles y todo aquello capaz de transformar un espacio.",
    chapters: [
      {
        marker: "Ser mamá y emprender",
        paragraphs: [
          "Pero también nació en un momento muy especial de mi vida: cuando era mamá de un bebé de apenas dos años.",
          "Como muchas mujeres, me encontré frente a una realidad que conocemos demasiado bien: la dificultad de desarrollarnos profesionalmente sin resignar el tiempo más valioso junto a nuestros hijos. Yo soñaba con construir algo propio, pero, sobre todo, soñaba con poder estar presente. Quería acompañarlo en sus primeros pasos, en sus descubrimientos, en sus abrazos inesperados y en cada uno de esos momentos que no vuelven.",
          "Por eso decidí crear un trabajo que me permitiera generar un ingreso sin dejar de priorizar el cuidado de mi hijo. No fue, ni es, un camino fácil. Ser emprendedora y mamá al mismo tiempo es un desafío constante, pero es un desafío que sigo eligiendo todos los días.",
        ],
      },
      {
        marker: "Las horas en que todo florece",
        paragraphs: [
          "Muchas de las ideas más locas, creativas y revolucionarias para hacer crecer este emprendimiento nacieron de noche, cuando mi bebé finalmente se dormía y la casa quedaba en silencio. Eran mis horas de mayor inspiración.",
          "Cerraba los ojos y solo veía flores, colores, texturas y mariposas uniéndose entre sí hasta formar una pieza única.",
        ],
      },
      {
        marker: "Un camino propio",
        paragraphs: [
          "Siempre tuve una idea muy clara: no quería hacer lo mismo que hacen todos. Quería crear piezas capaces de emocionar, sorprender y transmitir una historia. Objetos que tuvieran identidad, personalidad y ese detalle especial que los volviera inolvidables.",
          "Con el tiempo, fueron mis propios clientes quienes marcaron el camino. Poco a poco comenzaron a llegar pedidos para cumpleaños, comuniones, bautismos, quince años y celebraciones especiales. Sin planearlo, aquel proyecto de decoración empezó a convertirse en algo mucho más grande: un emprendimiento dedicado a acompañar algunos de los momentos más importantes en la vida de las personas.",
        ],
      },
      {
        marker: "De Recrearte a Flora",
        paragraphs: [
          "Durante esa primera etapa, mi marca se llamó Recrearte Eventos. Fue el nombre que estuvo conmigo mientras aprendía, crecía y descubría qué era realmente lo que quería crear.",
          "Pero los proyectos también evolucionan. Recrearte había nacido para representar una idea distinta y llegó un momento en el que sentí que ya no podía expresar todo lo que hoy significa este emprendimiento para mí. Así nació Flora Eventos Florales.",
          "Un nombre que lleva mucho de mi propia historia, de mi nombre, Florencia, y también de aquello que siempre estuvo presente en mis creaciones: las flores, la naturaleza, el color, las mariposas y la emoción de ver cómo una idea empieza a tomar vida.",
        ],
      },
      {
        marker: "Hoy",
        paragraphs: [
          "Hoy, cada pieza que sale de mi taller tiene una parte de esa historia. La de una mamá que decidió apostar por sus sueños sin dejar de estar presente para su hijo. La de una mujer que encontró en las flores una forma de expresar emociones. Y la de un emprendimiento que cree que los pequeños detalles son los que terminan convirtiendo un momento en un recuerdo para toda la vida.",
        ],
      },
    ],
    quote: "En mi cabeza, cada creación comenzaba mucho antes de existir con mis manos.",
    highlight: "Bienvenidos a Flora. Un lugar donde la creatividad florece, cada diseño es único y cada creación está hecha con el corazón.",
    signature: "Florencia · Creadora de Flora",
  },
  services: {
    eyebrow: "SERVICIOS",
    title: "Detalles pensados para hacer única cada celebración",
    intro: "Cada evento tiene una historia diferente. Por eso trabajo cada propuesta de manera personalizada, combinando flores, colores, texturas y detalles para que todo tenga una misma identidad.",
    items: [
      { title: "Centros de mesa", description: "Diseños florales modernos y personalizados para acompañar la estética de tu evento y transformar cada mesa en parte de la experiencia." },
      { title: "Souvenirs", description: "Recuerdos creados para que tus invitados se lleven un pedacito de ese día especial, cuidando cada detalle desde el diseño hasta la presentación." },
      { title: "Decoración para eventos", description: "Propuestas decorativas para comuniones, bautismos, cumpleaños, quince años y celebraciones especiales, adaptadas al estilo y la paleta de cada ocasión." },
      { title: "Decoración floral", description: "Composiciones con flores artificiales, mariposas y elementos decorativos que aportan volumen, delicadeza y personalidad a cada espacio." },
      { title: "Diseños personalizados", description: "Si tenés una idea diferente, podemos desarrollarla desde cero y crear una propuesta especialmente pensada para tu celebración." },
    ],
    cta: "Contame tu idea",
  },
  gallery: {
    eyebrow: "GALERÍA",
    title: "Cada evento, una historia diferente",
    description: "Una selección de celebraciones, centros de mesa, souvenirs y detalles que fueron creados para acompañar momentos únicos.",
    categories: ["Todos", "Centros de mesa", "Souvenirs", "Velas y pergaminos", "Arreglos florales y ramos", "Cuadros de firmas"],
    emptyState: "Muy pronto vas a encontrar nuevas historias floreciendo por acá.",
  },
  contact: {
    eyebrow: "CONTACTO",
    title: "Hagamos florecer tu idea",
    description: "Contame qué estás imaginando para tu evento, la fecha, el tipo de celebración y todos los detalles que quieras compartir. A partir de ahí podemos empezar a crear una propuesta pensada especialmente para vos.",
    form: { name: "Nombre", phone: "WhatsApp", email: "Email", eventType: "Tipo de evento", eventDate: "Fecha del evento", interest: "Producto o servicio de interés", message: "Contame un poco sobre tu idea", submit: "Enviar consulta" },
    directContact: { title: "¿Preferís un trato directo?", whatsapp: "WhatsApp", whatsappPhone: "+54 9 11 3817-5039", instagram: "Instagram", channelsNote: "Escribime por WhatsApp o por el formulario y te respondo personalmente con una propuesta pensada para tu evento.", response: "Respuesta personal · Sin compromiso" },
    closing: "Cada gran celebración empieza con una idea. La tuya puede empezar acá.",
  },
  footer: {
    brand: "Flora Eventos Florales",
    tagline: "Momentos que florecen",
    description: "Souvenirs, centros de mesa y decoración floral para eventos creados con dedicación, sensibilidad y amor por los detalles.",
    copyright: "© Flora Eventos Florales. Todos los derechos reservados.",
  },
} as const;
