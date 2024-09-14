export async function fetchDribbbleShots(count: number) {
  const { DRIBBBLE_ACCESS_TOKEN } = import.meta.env;
  const DRIBBBLE_URL = `https://api.dribbble.com/v2/user/shots?access_token=${DRIBBBLE_ACCESS_TOKEN}&per_page=${count}`;

  const response = await fetch(DRIBBBLE_URL);

  if (!response.ok) {
    throw new Error(`Failed to fetch Dribbble shots: ${response.statusText}`);
  }

  const rawShots: DribbbleShotRaw[] = await response.json();

  const parsedShots: DribbbleShot[] = rawShots.map((rawShot) => ({
    description: rawShot.description,
    html_url: rawShot.html_url,
    id: rawShot.id,
    images: {
      hidpi: rawShot.images.hidpi,
      normal: rawShot.images.normal,
    },
    tags: rawShot.tags,
    title: rawShot.title,
    published_at: new Date(rawShot.published_at),
    updated_at: new Date(rawShot.updated_at),
  }));

  return parsedShots;
}

type DribbbleShotRaw = {
  animated: boolean;
  description: string;
  height: number;
  html_url: string;
  id: number;
  images: {
    hidpi: string;
    normal: string;
    one_x: string;
    two_x: string;
    four_x: string;
    teaser: string;
  };
  low_profile: boolean;
  tags: string[];
  title: string;
  width: number;
  published_at: string;
  updated_at: string;
  attachments: unknown[];
  projects: unknown[];
  video: unknown;
};

export type DribbbleShot = {
  description: string;
  html_url: string;
  id: number;
  images: {
    hidpi: string;
    normal: string;
  };
  tags: string[];
  title: string;
  published_at: Date;
  updated_at: Date;
};
