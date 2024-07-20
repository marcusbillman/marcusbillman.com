/**
 * Animated, horizontal, sine-like wave.
 */
export default function WaveLine({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`${className} h-3 bg-current [mask-image:url('/assets/images/wave-tile.svg')] [mask-size:contain] motion-safe:animate-wave-line`}
      {...props}
    ></div>
  );
}
