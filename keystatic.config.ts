import { collection, config, fields, singleton } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local',
  },
  collections: {
    projects: collection({
      label: 'Proyectos',
      slugField: 'title',
      path: 'src/content/projects/*/',
      format: { contentField: 'body' },
      schema: {
        title: fields.slug({
          name: {
            label: 'Título',
            description:
              'Nombre público de la experiencia. Con « | El Efecto Stendhal» el title SEO debe quedar entre 50 y 60 caracteres.',
          },
        }),
        client: fields.text({
          label: 'Cliente',
          validation: { isRequired: true },
        }),
        role: fields.text({
          label: 'Rol',
          description: 'Qué hizo El Efecto Stendhal en este evento.',
          validation: { isRequired: true },
        }),
        year: fields.integer({
          label: 'Año',
          validation: { isRequired: true, min: 1990, max: 2100 },
        }),
        summary: fields.text({
          label: 'Resumen',
          multiline: true,
          description:
            'Entre 140 y 160 caracteres. Se usa como meta description de la ficha.',
          validation: { isRequired: true, length: { min: 140, max: 160 } },
        }),
        cover: fields.image({
          label: 'Imagen de portada',
          description: 'Horizontal, sin texto crítico. Se optimiza al construir la web.',
          validation: { isRequired: true },
        }),
        gallery: fields.array(fields.image({ label: 'Imagen' }), {
          label: 'Galería',
          itemLabel: () => 'Imagen',
        }),
        order: fields.integer({
          label: 'Orden',
          description: 'Cuanto más bajo, antes aparece en listados.',
          defaultValue: 0,
          validation: { isRequired: true, min: 0 },
        }),
        featured: fields.checkbox({
          label: 'Destacado',
          description: 'Si está marcado, el proyecto puede aparecer en la home.',
          defaultValue: false,
        }),
        body: fields.markdoc({
          label: 'Cuerpo',
        }),
      },
    }),
  },
  singletons: {
    home: singleton({
      label: 'Inicio',
      path: 'src/content/home',
      format: { data: 'json' },
      schema: {
        headline: fields.text({
          label: 'Titular',
          description: 'El h1 de la home. Debe contener la propuesta de valor.',
          validation: { isRequired: true },
        }),
        subheadline: fields.text({
          label: 'Subtítulo',
          multiline: true,
          validation: { isRequired: true },
        }),
        aboutHeading: fields.text({
          label: 'Título de la sección sobre la marca',
          validation: { isRequired: true },
        }),
        about: fields.text({
          label: 'Sobre la marca',
          multiline: true,
          description: 'Texto de presentación de El Efecto Stendhal.',
          validation: { isRequired: true },
        }),
        featuredHeading: fields.text({
          label: 'Título de proyectos destacados',
          validation: { isRequired: true },
        }),
        cta: fields.object(
          {
            label: fields.text({
              label: 'Texto del botón',
              validation: { isRequired: true },
            }),
            href: fields.text({
              label: 'Enlace',
              description: 'Ruta interna (/projects) o mailto:.',
              validation: { isRequired: true },
            }),
          },
          { label: 'Llamada a la acción' },
        ),
        seoTitle: fields.text({
          label: 'Title SEO',
          description: 'Obligatorio, entre 50 y 60 caracteres.',
          validation: { isRequired: true, length: { min: 50, max: 60 } },
        }),
        seoDescription: fields.text({
          label: 'Description SEO',
          multiline: true,
          description: 'Obligatorio, entre 140 y 160 caracteres. Escrito para clic, no para el robot.',
          validation: { isRequired: true, length: { min: 140, max: 160 } },
        }),
      },
    }),
    settings: singleton({
      label: 'Ajustes',
      path: 'src/content/settings',
      format: { data: 'json' },
      schema: {
        siteName: fields.text({
          label: 'Nombre del sitio',
          validation: { isRequired: true },
        }),
        defaultTitle: fields.text({
          label: 'Title SEO por defecto',
          description: 'Entre 50 y 60 caracteres. Se usa si una página no define el suyo.',
          validation: { isRequired: true, length: { min: 50, max: 60 } },
        }),
        defaultDescription: fields.text({
          label: 'Description SEO por defecto',
          multiline: true,
          description: 'Entre 140 y 160 caracteres.',
          validation: { isRequired: true, length: { min: 140, max: 160 } },
        }),
        ogImage: fields.image({
          label: 'Imagen Open Graph',
          description: '1200×630 px. Se sirve desde / y se usa en redes si la página no tiene otra.',
          directory: 'public',
          publicPath: '/',
          validation: { isRequired: true },
        }),
        email: fields.text({
          label: 'Email de contacto',
          validation: { isRequired: true },
        }),
        socials: fields.array(
          fields.object({
            label: fields.text({
              label: 'Nombre',
              validation: { isRequired: true },
            }),
            href: fields.url({
              label: 'URL',
              validation: { isRequired: true },
            }),
          }),
          {
            label: 'Redes',
            itemLabel: (props) => props.fields.label.value || 'Red',
          },
        ),
        projectsTitle: fields.text({
          label: 'Title SEO de Proyectos',
          description: 'Entre 50 y 60 caracteres.',
          validation: { isRequired: true, length: { min: 50, max: 60 } },
        }),
        projectsDescription: fields.text({
          label: 'Description SEO de Proyectos',
          multiline: true,
          description: 'Entre 140 y 160 caracteres.',
          validation: { isRequired: true, length: { min: 140, max: 160 } },
        }),
        projectsHeading: fields.text({
          label: 'H1 de Proyectos',
          validation: { isRequired: true },
        }),
        projectsEmpty: fields.text({
          label: 'Texto si no hay proyectos',
          validation: { isRequired: true },
        }),
      },
    }),
  },
});
