export function absoluteUrl(path: string, site: URL | string): string {
  const base = typeof site === 'string' ? site : site.toString();
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return new URL(normalizedPath, base).toString();
}

export function canonicalPath(path: string): string {
  if (path === '/') return '/';
  return path.replace(/\/+$/, '');
}
