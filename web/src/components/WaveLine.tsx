interface Props {
  className?: string;
}

/**
 * Animated, horizontal, sine-like wave.
 */
export default function WaveLine({ className }: Props) {
  return (
    <div
      className={`h-3 bg-current [mask-image:url('/assets/images/tiled/wave.svg')] [mask-size:contain] motion-safe:animate-wave-line ${className}`}
    ></div>
  );
}
