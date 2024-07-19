interface Props {
  /** Optionally add a dimmed overlay to make the dot grid more subtle */
  dim?: 'default' | 'strong' | 'none';
}

/**
 * Dotted grid background. Absolutely positioned to fill its parent. Set `isolation: isolate` on the parent to place at the back.
 */
export default function DotGrid({ dim = 'none' }: Props) {
  function dimClass() {
    if (dim === 'default') return 'bg-overlay-dim-default';
    if (dim === 'strong') return 'bg-overlay-dim-strong';
    return '';
  }

  return (
    <div
      className={`${dimClass()} absolute inset-0 -z-10 bg-[url('/assets/images/dot-tile-light.svg')] bg-center dark:bg-[url('/assets/images/dot-tile-dark.svg')]`}
    ></div>
  );
}
