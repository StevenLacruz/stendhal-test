export function assertSeoLength(
  title: string,
  description: string,
  page: string,
): void {
  if (title.length < 50 || title.length > 60) {
    throw new Error(
      `[SEO] ${page}: el title tiene ${title.length} caracteres (debe estar entre 50 y 60).`,
    );
  }

  if (description.length < 140 || description.length > 160) {
    throw new Error(
      `[SEO] ${page}: la description tiene ${description.length} caracteres (debe estar entre 140 y 160).`,
    );
  }
}

export function projectDocumentTitle(title: string, siteName: string): string {
  const composed = `${title} | ${siteName}`;
  if (composed.length >= 50 && composed.length <= 60) return composed;
  if (title.length >= 50 && title.length <= 60) return title;
  throw new Error(
    `[SEO] El proyecto «${title}» no genera un title de 50–60 caracteres. Ajusta el título (ahora ${composed.length} con el nombre de marca).`,
  );
}
