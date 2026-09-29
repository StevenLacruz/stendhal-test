import { defineCollection, z } from 'astro:content';
import { file, glob } from 'astro/loaders';

const seoTitle = z.string().min(50).max(60);
const seoDescription = z.string().min(140).max(160);

const asSingleton =
  (id: string) =>
  (text: string): Array<Record<string, unknown>> => {
    const data = JSON.parse(text) as Record<string, unknown>;
    return [{ id, ...data }];
  };

const projects = defineCollection({
  loader: glob({
    pattern: '**/index.mdoc',
    base: './src/content/projects',
  }),
  schema: ({ image }) =>
    z.object({
      title: z.string().min(1),
      client: z.string().min(1),
      role: z.string().min(1),
      year: z.number().int().min(1990).max(2100),
      summary: seoDescription,
      cover: image(),
      gallery: z.array(image()).default([]),
      order: z.number().int().min(0).default(0),
      featured: z.boolean().default(false),
    }),
});

const home = defineCollection({
  loader: file('src/content/home.json', { parser: asSingleton('home') }),
  schema: z.object({
    headline: z.string().min(1),
    subheadline: z.string().min(1),
    aboutHeading: z.string().min(1),
    about: z.string().min(1),
    featuredHeading: z.string().min(1),
    cta: z.object({
      label: z.string().min(1),
      href: z.string().min(1),
    }),
    seoTitle,
    seoDescription,
  }),
});

const settings = defineCollection({
  loader: file('src/content/settings.json', { parser: asSingleton('settings') }),
  schema: z.object({
    siteName: z.string().min(1),
    defaultTitle: seoTitle,
    defaultDescription: seoDescription,
    ogImage: z.string().min(1),
    email: z.string().email(),
    socials: z.array(
      z.object({
        label: z.string().min(1),
        href: z.string().url(),
      }),
    ),
    projectsTitle: seoTitle,
    projectsDescription: seoDescription,
    projectsHeading: z.string().min(1),
    projectsEmpty: z.string().min(1),
  }),
});

export const collections = { projects, home, settings };
