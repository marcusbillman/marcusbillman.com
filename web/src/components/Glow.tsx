interface Props {
  color: 'blueberry' | 'orange';
  className?: string;
}

/**
 * Decorative glow effect. Absolutely positioned and square. Remember to set width or height using styles.
 */
export default function Glow({ color, className }: Props) {
  function bgClass() {
    if (color === 'blueberry') {
      return 'bg-[url("/assets/images/glow-blueberry.png")]';
    }
    if (color === 'orange') {
      return 'bg-[url("/assets/images/glow-orange.png")]';
    }
  }

  return (
    <div
      className={`${className} absolute -z-10 aspect-square ${bgClass()} bg-cover bg-center`}
    />
  );
}
