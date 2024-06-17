interface Props {
  dim?: 'default' | 'strong' | 'none';
}

export default function DotGrid({ dim = 'none' }: Props) {
  function dimClass() {
    if (dim === 'default') return 'bg-overlay-dim-default';
    if (dim === 'strong') return 'bg-overlay-dim-strong';
    return '';
  }

  return (
    <div
      className={`${dimClass()} absolute inset-0 -z-10 bg-[url('/assets/images/tiled/dot-light.svg')] bg-center dark:bg-[url('/assets/images/tiled/dot-dark.svg')]`}
    ></div>
  );
}
