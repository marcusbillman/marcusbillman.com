import type { SanityImageSource } from '@sanity/image-url/lib/types/types';
import type { Project } from '@studio/sanity.types';

import imageUrlBuilder from '@sanity/image-url';
import { sanityClient } from 'sanity:client';

const builder = imageUrlBuilder(sanityClient);

export function sanityImageUrl(source: SanityImageSource) {
  return builder.image(source);
}

export async function fetchAllProjects() {
  return await sanityClient.fetch<Project[]>(
    `*[_type == "project"] | order(orderRank asc)`,
  );
}

export async function fetchFeaturedProjects() {
  return await sanityClient.fetch<Project[]>(
    `*[_type == "project" && featured == true] | order(orderRank asc)`,
  );
}
