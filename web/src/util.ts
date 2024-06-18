export function isExternalUrl(url: string) {
  return url.match(/\w+\:*/) ? true : false;
}
