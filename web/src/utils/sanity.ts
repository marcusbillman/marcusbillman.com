import type { SanityImageSource } from '@sanity/image-url/lib/types/types';
import type { NewsBanner, Project } from '@studio/sanity.types';

import imageUrlBuilder from '@sanity/image-url';
import { sanityClient } from 'sanity:client';

const builder = imageUrlBuilder(sanityClient);
const language = import.meta.env.PUBLIC_LOCALE || 'en';

export function sanityImageUrl(source: SanityImageSource) {
  return builder.image(source);
}

export async function fetchAllProjects() {
  return await sanityClient.fetch<Project[]>(
    `*[
      _type == "project" &&
      (language == "${language}" || !defined(language))
    ] | order(orderRank asc)`,
  );
}

export async function fetchFeaturedProjects() {
  return await sanityClient.fetch<Project[]>(
    `*[
      _type == "project" &&
      featured == true &&
      (language == "${language}" || !defined(language))
    ] | order(orderRank asc)`,
  );
}

export async function fetchNewsBanner() {
  return await sanityClient.fetch<NewsBanner>(
    `*[
      _type == "newsBanner" &&
      (language == "${language}" || !defined(language))
    ] [0]`,
  );
}
