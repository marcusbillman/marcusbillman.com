import type { Project } from '@studio/sanity.types';
import type { DribbbleShot } from '@/util/dribbble';

export type PortfolioItem = {
  type: 'CASE_STUDY' | 'SIDE_PROJECT' | 'DRIBBBLE_SHOT';
  id: string;
  data: Project | DribbbleShot;
};
