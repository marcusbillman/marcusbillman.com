import { getImage } from 'astro:assets';

import blueberry from '@/assets/images/glow-blueberry.png';
import orange from '@/assets/images/glow-orange.png';

const optimizedBlueberry = await getImage({ src: blueberry });
const optimizedOrange = await getImage({ src: orange });

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  color: 'blueberry' | 'orange';
}

/**
 * Decorative glow effect. Absolutely positioned and square. Remember to set width or height using styles.
 */
export default function Glow({ color, className, style, ...props }: Props) {
  function src() {
    if (color === 'blueberry') return optimizedBlueberry.src;
    if (color === 'orange') return optimizedOrange.src;
  }

  return (
    <div
      className={`${className} absolute -z-10 aspect-square bg-cover bg-center`}
      style={{ backgroundImage: `url(${src()})`, ...style }}
      {...props}
    />
  );
}
