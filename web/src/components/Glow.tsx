import { getImage } from 'astro:assets';

import blueberry from '@/assets/images/glow-blueberry.png';
import orange from '@/assets/images/glow-orange.png';

const optimizedBlueberry = await getImage({ src: blueberry });
const optimizedOrange = await getImage({ src: orange });

interface Props {
  color: 'blueberry' | 'orange';
  className?: string;
}

/**
 * Decorative glow effect. Absolutely positioned and square. Remember to set width or height using styles.
 */
export default function Glow({ color, className }: Props) {
  function src() {
    if (color === 'blueberry') return optimizedBlueberry.src;
    if (color === 'orange') return optimizedOrange.src;
  }

  return (
    <div
      className={`${className} absolute -z-10 aspect-square bg-cover bg-center`}
      style={{ backgroundImage: `url(${src()})` }}
    />
  );
}
