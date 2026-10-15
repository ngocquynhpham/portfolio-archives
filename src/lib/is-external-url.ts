export function isExternalUrl(link: string): boolean {
  return /^https?:\/\//i.test(link);
}
