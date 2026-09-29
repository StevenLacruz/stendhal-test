import { getCollection, getEntry } from 'astro:content';

export async function getHome() {
  const entry = await getEntry('home', 'home');
  if (!entry) {
    throw new Error('Falta el singleton «Inicio». Créalo en /keystatic.');
  }
  return entry;
}

export async function getSettings() {
  const entry = await getEntry('settings', 'settings');
  if (!entry) {
    throw new Error('Falta el singleton «Ajustes». Créalo en /keystatic.');
  }
  return entry;
}

export async function getProjects() {
  const projects = await getCollection('projects');
  return projects.sort((a, b) => a.data.order - b.data.order);
}

export async function getFeaturedProjects() {
  const projects = await getProjects();
  return projects.filter((project) => project.data.featured);
}
