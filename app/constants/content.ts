import type { GalleryItem } from "../types/content";

export const NAVIGATION = [
  { label: "Inicio", href: "#inicio" },
  { label: "Sobre Flora", href: "#sobre-flora" },
  { label: "Servicios", href: "#servicios" },
  { label: "Galería", href: "#galeria" },
  { label: "Contacto", href: "#contacto" },
] as const;

export const SOCIAL_LINKS = {
  whatsapp: "", // TODO: agregar URL real
  instagram: "", // TODO: agregar URL real
} as const;

export const SITE_CONTENT = {
  hero: {
    eyebrow: "FLORA · EVENTOS FLORALES",
    title: "Momentos que florecen",
    subtitle: "Creamos decoración floral, souvenirs y detalles únicos para transformar cada celebración en un recuerdo especial.",
    description: "Diseñamos cada propuesta con sensibilidad, dedicación y una mirada puesta en los pequeños detalles que hacen que un momento se vuelva inolvidable.",
    primaryCta: "Quiero crear mi evento",
    secondaryCta: "Ver trabajos",
  },
  about: {
    eyebrow: "SOBRE FLORA",
    title: "Una historia que fue creciendo y encontrando su propia esencia",
    intro: "Soy Florencia, la persona detrás de Flora. Este proyecto nació hace más de tres años, cuando empecé creando piezas de decoración para el hogar, movida por el amor por las flores, los detalles y todo aquello capaz de transformar un espacio.",
    paragraphs: [
      "Con el tiempo, fueron mis propios clientes quienes marcaron el camino. Poco a poco comenzaron a llegar pedidos para cumpleaños, comuniones, bautismos, quince años y celebraciones especiales. Sin planearlo, aquel proyecto de decoración empezó a convertirse en algo mucho más grande: un emprendimiento dedicado a acompañar momentos importantes.",
      "Durante esa primera etapa, mi marca se llamó Recrearte Eventos. Fue el nombre que estuvo conmigo mientras aprendía, crecía y descubría qué era realmente lo que quería crear.",
      "Pero los proyectos también evolucionan. Recrearte había nacido para representar una idea distinta y llegó un momento en el que sentí que ya no podía contar todo lo que hoy significa este emprendimiento para mí.",
      "Así nació Flora Eventos Florales. Un nombre que tiene mucho de mi propia historia, de mi nombre, Florencia, y también de aquello que siempre estuvo presente en mis creaciones: las flores, la naturaleza, el color, las mariposas y la emoción de ver cómo una idea empieza a tomar vida.",
      "Flora es inspiración, es arte y es esencia. Es una nueva identidad para un proyecto que conserva el mismo corazón de siempre, pero que hoy sabe mucho mejor quién es y hacia dónde quiere crecer.",
    ],
    highlight: "Mismo corazón, misma pasión, una nueva esencia.",
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
    categories: ["Todos", "Centros de mesa", "Souvenirs", "Comuniones y bautismos", "Quince años", "Eventos especiales"],
    emptyState: "Muy pronto vas a encontrar nuevas historias floreciendo por acá.",
  },
  contact: {
    eyebrow: "CONTACTO",
    title: "Hagamos florecer tu idea",
    description: "Contame qué estás imaginando para tu evento, la fecha, el tipo de celebración y todos los detalles que quieras compartir. A partir de ahí podemos empezar a crear una propuesta pensada especialmente para vos.",
    form: { name: "Nombre", phone: "WhatsApp", email: "Email", eventType: "Tipo de evento", eventDate: "Fecha del evento", message: "Contame un poco sobre tu idea", submit: "Enviar consulta" },
    directContact: { title: "¿Preferís hablar directamente?", whatsapp: "Escribime por WhatsApp", instagram: "Seguime en Instagram" },
    closing: "Cada gran celebración empieza con una idea. La tuya puede empezar acá.",
  },
  footer: {
    brand: "Flora Eventos Florales",
    tagline: "Momentos que florecen",
    description: "Souvenirs, centros de mesa y decoración floral para eventos creados con dedicación, sensibilidad y amor por los detalles.",
    copyright: "© Flora Eventos Florales. Todos los derechos reservados.",
  },
} as const;

const gallery = (
  file: string,
  category: GalleryItem["category"],
  title: string,
  size: GalleryItem["size"] = "standard",
): GalleryItem => ({
  id: file.slice(0, 8),
  src: `/images/${file}`,
  alt: `${title}, diseño de Flora Eventos Florales`,
  category,
  title,
  size,
});

export const GALLERY_ITEMS: GalleryItem[] = [
  gallery("5130ca3e-8853-4b81-b1d9-499dd624fa29.JPG", "Eventos especiales", "Celebración en blanco", "tall"),
  gallery("007bd6cd-e92d-4458-91a3-e5ba32d81040.JPG", "Quince años", "Una noche en rosa"),
  gallery("02d0cfd9-607d-489e-aa06-9a0e1a8b4993.JPG", "Souvenirs", "Recuerdos con flores", "wide"),
  gallery("61c340ba-42f9-4c02-b9a1-134415de547c.JPG", "Comuniones y bautismos", "Delicadeza en celeste", "tall"),
  gallery("42a989c6-772a-4ddc-825b-12ec8501f136.JPG", "Quince años", "Mariposas que brillan", "wide"),

  gallery("022e1d44-f524-43a8-b2e9-2a42487e23cc.JPG", "Souvenirs", "Rosas para recordar"),
  gallery("2bb31039-21ab-4b69-87d6-efa978e7f1cd.JPG", "Souvenirs", "Cúpulas de quince"),
  gallery("39253bd5-b8c3-454c-ba0e-281fde9a081c 3.JPG", "Souvenirs", "Rosas blancas iluminadas"),
  gallery("39ead7d6-8e45-407e-9801-c10972af2625.JPG", "Souvenirs", "Velas personalizadas"),
  gallery("59096501-0c65-41f6-9ea1-8d9a2ce2f285.JPG", "Souvenirs", "Faroles encantados"),
  gallery("befde3b1-770d-4058-84a7-4af23850da2b.JPG", "Souvenirs", "Rosas y pergaminos"),
  gallery("c86b9675-662e-4666-b39a-ff7532202bcc.JPG", "Souvenirs", "Detalles de cuento"),
  gallery("e58a0ad6-03fe-4a44-88ad-f0bbabed098e.JPG", "Souvenirs", "Lapiceras mariposa", "wide"),
  gallery("ec3ff824-d817-4e30-b54c-e2aa1628cba2.JPG", "Souvenirs", "Recuerdos en rosa"),

  gallery("18073a83-a851-4f30-9a08-ba2eed7f617b.JPG", "Centros de mesa", "Jardín de mariposas", "tall"),
  gallery("0a7e320f-6f73-413e-bd75-3fac74897b07.JPG", "Centros de mesa", "Noche de estrellas"),
  gallery("1dc73c05-d11a-49e3-b34a-13721bd185e9.JPG", "Centros de mesa", "Flores en celeste"),
  gallery("1ed24a86-5d50-4aa4-a97f-1fc56e5b7bc8.JPG", "Centros de mesa", "Rosa blanca y luz"),
  gallery("2302d747-b198-4375-b72b-c6a54f7afad7.JPG", "Centros de mesa", "Flores flotantes"),
  gallery("2432f6b6-4ac3-4e4d-a0c4-7f2ac0988a90 2.JPG", "Centros de mesa", "Rosas bajo el agua"),
  gallery("2d2c933b-a084-4c2e-b24b-bcca9fedea70.JPG", "Centros de mesa", "Faroles con mariposas"),
  gallery("2efd818e-eaed-4512-a729-dc63f4772747.JPG", "Centros de mesa", "Jardín en lavanda"),
  gallery("3f8e4aa3-35db-4b4a-be59-bf3705d1353d.JPG", "Centros de mesa", "Flores suspendidas"),
  gallery("4c151c8c-34a2-4b24-b005-89b322e270ed.JPG", "Centros de mesa", "Bordó y dorado"),
  gallery("686fa6c7-e0d2-4cf3-abc9-1e2550b7a268.JPG", "Centros de mesa", "Rosas blancas"),
  gallery("7acd7a81-0dbe-476b-8b7e-1b5737e34f9d 2.JPG", "Centros de mesa", "Mariposas doradas"),
  gallery("7e493bb5-b7b4-48c8-88cb-c5ac5fb8db21.JPG", "Centros de mesa", "Corona de luz"),
  gallery("80e0734f-44a7-41b0-9134-a573306673cf.JPG", "Centros de mesa", "Trío floral"),
  gallery("92abff82-5972-4a05-b48e-af5bc7ee27d8.JPG", "Centros de mesa", "Madera y flores"),
  gallery("96063d31-a80e-4e1c-8993-8c93a9c3d381 3.JPG", "Centros de mesa", "Aros de mariposas"),
  gallery("afc5f5dc-93fd-4fcf-8ef8-13442aa27e1c.JPG", "Centros de mesa", "Flores de quince"),
  gallery("c120bcd2-eabd-42a4-8286-a936b4796173.JPG", "Centros de mesa", "Luz y madera"),
  gallery("c4eb09d2-abe1-41c4-8dd7-f3c4a25487f7.JPG", "Centros de mesa", "Bosque encantado"),
  gallery("ce942c2e-dced-429e-8f58-25b911e50f2c.JPG", "Centros de mesa", "Camino floral", "wide"),
  gallery("d1ed477b-3a38-4948-89cb-953a5da0d64e.JPG", "Centros de mesa", "Flores en bordó"),
  gallery("d5ad77bf-0fde-4b83-998d-fe0adb5fa2be.JPG", "Centros de mesa", "Aro en celeste"),
  gallery("dc254dc4-094c-4bd8-bbfc-958d6b604b43 2.JPG", "Centros de mesa", "Corona floral"),
  gallery("dfa9b0a4-c3d3-4c4a-97c6-e1805bbd9632.JPG", "Centros de mesa", "Rosas en degradé"),
  gallery("e0ee1379-e2cd-46b5-9e28-d4aab0c52f33.JPG", "Centros de mesa", "Lirio de luz"),
  gallery("eca9e31e-68ef-4139-8313-fc751f97218c.JPG", "Centros de mesa", "Noche bordó"),
  gallery("f6558e46-890e-42d8-9e9c-c431a53cb7fb.JPG", "Centros de mesa", "Aro en rosa"),
  gallery("faf73f15-6b3c-4bfb-b5ed-771e6bc4ee6a.JPG", "Centros de mesa", "Mariposas iluminadas"),

  gallery("1a71ca44-42db-4be7-9690-c8318720c961.JPG", "Quince años", "Una historia de princesa"),
  gallery("2af3af93-102f-48b5-b090-3407aa63214d.JPG", "Quince años", "Luces de Rapunzel", "wide"),
  gallery("2ddc5e4c-b489-4712-add5-28f63724b6df.JPG", "Quince años", "Mariposas entre amigos"),
  gallery("3aac3c6e-796f-4b73-93f6-d87cfb3ab5f4 2.JPG", "Quince años", "Quince en plata"),
  gallery("70b0d34c-789f-40f6-a068-7648c865a646.JPG", "Quince años", "Rosa encantada"),
  gallery("81d85895-5925-4f8b-9d02-9f92ddca59d8.JPG", "Quince años", "Faroles de princesa"),
  gallery("833d3661-99ef-4ce7-aac3-6bfed579b6d9.JPG", "Quince años", "Torre de ensueño"),
  gallery("9fe0c2a8-ed74-4e13-97de-83a3d60c2663.JPG", "Quince años", "Mariposa azul"),
  gallery("d734a20d-f01e-4496-9e64-4d44d1ca46d1.JPG", "Quince años", "Celebración en violeta"),
  gallery("dd021a83-3c14-4103-9233-e2fc213ce6cc.JPG", "Quince años", "Rosa azul"),

  gallery("0eda7c67-affb-4857-b734-125421e2aa8b.JPG", "Eventos especiales", "Luz de cuento"),
  gallery("86b237b9-fedd-4f2c-9b7f-9530523e28d0.JPG", "Eventos especiales", "Mesa en lavanda"),
  gallery("9547ed5c-58c9-4885-b4d3-999cda045500.JPG", "Eventos especiales", "Alas en celeste"),

  gallery("c778a109-db80-42cf-8353-29ac80c62f38.JPG", "Comuniones y bautismos", "Faroles de luz"),
  gallery("ff0a37b3-bbc9-4407-bef7-8776c50383dc.JPG", "Comuniones y bautismos", "Azul ceremonial"),
];
