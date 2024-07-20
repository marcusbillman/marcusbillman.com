import type { DribbbleShot } from '@/utils/dribbble';
import type { Project } from '@studio/sanity.types';

export type PortfolioItem = {
  type: 'CASE_STUDY' | 'SIDE_PROJECT' | 'DRIBBBLE_SHOT';
  id: string;
  data: Project | DribbbleShot;
};
