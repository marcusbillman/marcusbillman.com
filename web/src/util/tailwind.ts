import resolveConfig from 'tailwindcss/resolveConfig';

import tailwindConfig from '@/../tailwind.config.mjs';

export function useTailwindConfig() {
  return resolveConfig(tailwindConfig);
}
