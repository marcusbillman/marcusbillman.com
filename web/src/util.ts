export function isExternalUrl(url: string) {
  return url.match(/\w+\:*/) ? true : false;
}

export function randomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
