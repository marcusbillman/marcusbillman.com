interface Props {
  color: 'blueberry' | 'orange';
  className?: string;
}

/**
 * Decorative glow effect. Absolutely positioned and square. Remember to set width or height using styles.
 */
export default function Glow({ color, className }: Props) {
  return (
    <div
      className={`${className} absolute -z-10 aspect-square bg-[url("/assets/images/glow-${color}.png")] bg-cover bg-center`}
    />
  );
}
