import { sanityClient } from 'sanity:client';
import imageUrlBuilder from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';

export function isExternalUrl(url: string) {
  return url.startsWith('http') || url.startsWith('mailto');
}

export function randomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const builder = imageUrlBuilder(sanityClient);

export function sanityImageUrl(source: SanityImageSource) {
  return builder.image(source);
}
