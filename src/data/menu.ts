export type MenuImage = {
  src: string;
  width: number;
  height: number;
  alt: string;
};

export type MenuAct = {
  id: string;
  title: string;
  texts: string[];
  note?: string;
  image: MenuImage;
};

export type MenuSection = {
  slug: string;
  title: string;
  lede: string[];
  seoTitle: string;
  seoDescription: string;
  image: MenuImage;
  acts: MenuAct[];
};

export const menuSections: MenuSection[] = [
  {
    slug: 'musica-bandas-solistas',
    title: 'Música, bandas, solistas',
    lede: [
      'Esta sección presenta una variedad de artistas musicales, desde solistas hasta bandas, que destacan en diversos géneros. Su música conecta con el público a través de sus letras, melodías y ritmos únicos, creando experiencias memorables.',
    ],
    seoTitle: 'Artistas: música, bandas y solistas | El Efecto Stendhal',
    seoDescription:
      'Esta sección presenta artistas musicales, desde solistas hasta bandas. Su música conecta con el público a través de letras, melodías y ritmos únicos.',
    image: {
      src: '/media/cantante.jpg',
      width: 2200,
      height: 1166,
      alt: 'Cantante con vestido de flecos dorados durante una actuación en directo.',
    },
    acts: [
      {
        id: 'musical-tina-turner',
        title: 'Musical Tina Turner',
        texts: [],
        image: {
          src: '/media/banda.jpg',
          width: 2200,
          height: 1044,
          alt: 'El musical de Tina Turner, con la banda en el escenario y el público al frente.',
        },
      },
      {
        id: 'banda-efecto-stendhal',
        title: 'Banda Efecto Stendhal',
        texts: [],
        image: {
          src: '/media/menu/banda-stendhal.jpg',
          width: 1203,
          height: 2000,
          alt: 'Cantante de la banda con chaqueta de lentejuelas, camisa blanca y pajarita.',
        },
      },
      {
        id: 'opera-pop',
        title: 'Ópera pop',
        texts: [],
        image: {
          src: '/media/menu/opera-pop.jpg',
          width: 2000,
          height: 1334,
          alt: 'Cuatro cantantes con traje negro, micro en mano, bajo una luz azul.',
        },
      },
    ],
  },
  {
    slug: 'musica-en-vivo',
    title: 'Música en vivo',
    lede: [
      'Disponemos de los mejores músicos que forman parte de los grandes musicales, orquesta, espectáculos y bandas más importantes de nuestro país.',
    ],
    seoTitle: 'Música en vivo para tu evento | El Efecto Stendhal',
    seoDescription:
      'Disponemos de los mejores músicos que forman parte de los grandes musicales, orquesta, espectáculos y bandas más importantes de nuestro país.',
    image: {
      src: '/media/guitarra.jpg',
      width: 1710,
      height: 920,
      alt: 'Cantante y músicos actuando en directo bajo luces cálidas.',
    },
    acts: [
      {
        id: 'solistas-instrumentales',
        title: 'Solistas instrumentales',
        texts: [
          'Violinistas, saxofonistas, percusionistas, guitarristas clásicos y eléctricos, arpistas, chelistas, todo lo necesario para impresionar a tu público.',
        ],
        image: {
          src: '/media/menu/solistas.jpg',
          width: 2000,
          height: 1409,
          alt: 'Violinista tocando entre dos artistas sobre zancos, con tocados de plumas.',
        },
      },
      {
        id: 'bandas-y-formaciones',
        title: 'Bandas y formaciones',
        texts: [],
        image: {
          src: '/media/menu/bandas-formaciones.jpg',
          width: 2000,
          height: 1333,
          alt: 'Banda en directo, con cantantes y músicos frente al público.',
        },
      },
    ],
  },
  {
    slug: 'presentaciones',
    title: 'Presentaciones',
    lede: ['Disponemos de los mejores actores y músicos para todo tipo de eventos.'],
    seoTitle: 'Presentaciones con actores y músicos | El Efecto Stendhal',
    seoDescription:
      'Disponemos de los mejores actores, músicos para todo tipo de eventos. Presentaciones de Bridgerton, Wicked, Percy Jackson y La casa del dragón.',
    image: {
      src: '/media/conferencia.jpg',
      width: 2200,
      height: 1466,
      alt: 'Presentación en un auditorio ante una gran pantalla de escenario.',
    },
    acts: [
      {
        id: 'los-bridgerton',
        title: 'Los Bridgerton',
        texts: [],
        note: 'Netflix',
        image: {
          src: '/media/menu/bridgerton.jpg',
          width: 2000,
          height: 1331,
          alt: 'Elenco de Los Bridgerton, con instrumentos, frente al arco de la presentación.',
        },
      },
      {
        id: 'wicked',
        title: 'Wicked',
        texts: [],
        note: 'Disney+ · Próximamente',
        image: {
          src: '/media/menu/wicked.jpg',
          width: 1600,
          height: 2000,
          alt: 'Dos personajes de Wicked frente al cartel del estreno.',
        },
      },
      {
        id: 'percy-jackson',
        title: 'Percy Jackson',
        texts: [],
        note: 'Disney+',
        image: {
          src: '/media/menu/percy.jpg',
          width: 2000,
          height: 1500,
          alt: 'Tres personajes de Percy Jackson asomados a un coche dorado.',
        },
      },
      {
        id: 'la-casa-del-dragon',
        title: 'La casa del dragón',
        texts: [],
        note: 'HBO Max',
        image: {
          src: '/media/menu/dragon.jpg',
          width: 1684,
          height: 2000,
          alt: 'Arpa, violín y chelo en la presentación de La casa del dragón.',
        },
      },
    ],
  },
  {
    slug: 'performances-tematicos',
    title: 'Performances temáticos',
    lede: ['Disponemos de los mejores actores y músicos para todo tipo de eventos.'],
    seoTitle: 'Performances temáticos para eventos | El Efecto Stendhal',
    seoDescription:
      'Disponemos de los mejores actores, músicos para todo tipo de eventos. Arte en vivo y bodypaint interactivo, donde el cuerpo se convierte en un lienzo.',
    image: {
      src: '/media/zancos.jpg',
      width: 2200,
      height: 2165,
      alt: 'Artista sobre zancos, con traje lila, brindando con una intérprete de dorado.',
    },
    acts: [
      {
        id: 'arte-en-vivo',
        title: 'Arte en vivo',
        texts: [
          'Una original y cautivadora experiencia artística en vivo.',
          'Una propuesta escénica combinación de performance y Live Painting. El artista pintará una obra en vivo personalizada sobre el vestido de una modelo bailarina creando una exclusiva obra de Arte.',
        ],
        image: {
          src: '/media/conjunto.jpg',
          width: 2200,
          height: 1650,
          alt: 'Conjunto de artistas caracterizados durante una performance temática.',
        },
      },
      {
        id: 'bodypaint-interactivo',
        title: 'Bodypaint interactivo',
        texts: [
          'Arte en vivo donde el cuerpo se convierte en un lienzo, fusionando la pintura con la expresión artística.',
        ],
        image: {
          src: '/media/mascaras.jpg',
          width: 2200,
          height: 1676,
          alt: 'Tres intérpretes caracterizados durante una intervención temática.',
        },
      },
    ],
  },
  {
    slug: 'espana-flamenco-y-ole',
    title: 'España, flamenco y olé',
    lede: [
      'Esta propuesta combina los movimientos apasionados y enérgicos del flamenco tradicional con elementos coreográficos contemporáneos.',
    ],
    seoTitle: 'España, flamenco y olé en tu evento | El Efecto Stendhal',
    seoDescription:
      'Esta propuesta combina los movimientos apasionados y enérgicos del flamenco tradicional con elementos coreográficos contemporáneos en cada evento.',
    image: {
      src: '/media/patio.jpg',
      width: 2200,
      height: 1650,
      alt: 'Bailarina de flamenco con una gran cola roja en un patio de piedra.',
    },
    acts: [
      {
        id: 'danza-espanola',
        title: 'Danza española',
        texts: [],
        image: {
          src: '/media/escalinata.jpg',
          width: 2200,
          height: 1466,
          alt: 'Bailarina con vestido rojo de volantes y abanico, en una escalinata con cuerda.',
        },
      },
      {
        id: 'flamenco-contemporaneo',
        title: 'Flamenco contemporáneo',
        texts: [
          'Creando un espectáculo vibrante y emocional representado por los grandes artistas de esta especialidad de nuestro país.',
        ],
        image: {
          src: '/media/menu/flamenco-contemporaneo.jpg',
          width: 1500,
          height: 2000,
          alt: 'Pareja de flamenco en una azotea al anochecer, con guitarra al fondo.',
        },
      },
      {
        id: 'flamenco-mapping',
        title: 'Flamenco mapping',
        texts: [],
        image: {
          src: '/media/menu/flamenco-mapping.jpg',
          width: 2000,
          height: 1125,
          alt: 'Compañía de flamenco frente a una esfera de luz proyectada en el escenario.',
        },
      },
    ],
  },
  {
    slug: 'espectaculos-tematicos',
    title: 'Espectáculos temáticos',
    lede: [
      'Ofrecen una experiencia artística personalizada que gira en torno a un tema específico, adaptándose al contexto y la ambientación del evento.',
      'Sus espectáculos son ideales para eventos que buscan destacar una identidad o temática especial, ofreciendo una experiencia visual y emocional rica en detalles.',
    ],
    seoTitle: 'Espectáculos temáticos a medida | El Efecto Stendhal',
    seoDescription:
      'Ofrecen una experiencia artística personalizada que gira en torno a un tema específico, adaptándose al contexto y la ambientación del evento.',
    image: {
      src: '/media/menu/tematicos.jpg',
      width: 2000,
      height: 1500,
      alt: 'Elenco en una alfombra roja, entre dos estatuillas doradas, en una noche de premios.',
    },
    acts: [
      {
        id: 'performances-circenses',
        title: 'Performances circenses',
        texts: [
          'Espectáculos llenos de magia, acrobacias y habilidad física que transportan a los espectadores al mundo del circo. Estas actuaciones incluyen malabaristas, acróbatas aéreos, trapecistas, equilibristas, magos y otros artistas que desafían los límites de lo posible con su destreza y creatividad.',
        ],
        image: {
          src: '/media/menu/circenses.jpg',
          width: 2000,
          height: 1333,
          alt: 'Tres artistas sobre zancos, de blanco, en una alfombra roja.',
        },
      },
      {
        id: 'ilusionismo-y-magia',
        title: 'Ilusionismo y magia',
        texts: [
          'Diseñados para sorprender y maravillar al público a través de trucos visuales, ilusiones sorprendentes y destrezas que desafían la lógica. Los magos e ilusionistas utilizan una combinación de técnicas clásicas y modernas para crear momentos de asombro, desde desapariciones y levitaciones hasta transformaciones y lecturas mentales.',
        ],
        image: {
          src: '/media/menu/ilusionismo.jpg',
          width: 2000,
          height: 1333,
          alt: 'Cuatro personajes enmascarados, de rojo, naranja y negro, bajo una luna.',
        },
      },
    ],
  },
  {
    slug: 'espectaculos-tecnologicos',
    title: 'Espectáculos tecnológicos',
    lede: ['Fusionan arte y tecnología para crear experiencias visuales y sensoriales impactantes.'],
    seoTitle: 'Espectáculos tecnológicos y sensoriales | El Efecto Stendhal',
    seoDescription:
      'Fusionan arte y tecnología para crear experiencias visuales y sensoriales impactantes: bailarines con LED, espectáculos láser y mapping dance.',
    image: {
      src: '/media/alas.jpg',
      width: 2200,
      height: 1465,
      alt: 'Artista con grandes alas de luz durante una presentación.',
    },
    acts: [
      {
        id: 'bailarines-con-tecnologia-led',
        title: 'Bailarines con tecnología LED',
        texts: [],
        image: {
          src: '/media/menu/led-bailarines.jpg',
          width: 1500,
          height: 2000,
          alt: 'Bailarina con alas de luz LED, de espaldas, en una escalera.',
        },
      },
      {
        id: 'espectaculos-laser-y-led',
        title: 'Espectáculos láser y LED',
        texts: [],
        image: {
          src: '/media/menu/laser-led.jpg',
          width: 1500,
          height: 2000,
          alt: 'Personajes con calzado de LED bajo un neón rosa.',
        },
      },
      {
        id: 'inmersive-mapping-dance',
        title: 'Inmersive mapping dance',
        texts: [],
        image: {
          src: '/media/menu/mapping-dance.jpg',
          width: 2000,
          height: 1333,
          alt: 'Bailarinas con abanicos azules bajo un mapping de medusas.',
        },
      },
    ],
  },
];

for (const section of menuSections) {
  const sources = [section.image.src, ...section.acts.map((act) => act.image.src)];
  if (new Set(sources).size !== sources.length) {
    throw new Error(`La sección "${section.title}" contiene imágenes repetidas.`);
  }
}

export const menuIndexSeo = {
  title: 'Menú de espectáculos y artistas | El Efecto Stendhal',
  description:
    'Menú de El Efecto Stendhal: música, bandas, solistas, música en vivo, presentaciones, performances, flamenco y espectáculos tecnológicos para tu evento.',
};

export function menuHref(slug: string) {
  return `/menu/${slug}`;
}
