import { House } from '@phosphor-icons/react/dist/ssr';
import { getImage } from 'astro:assets';

import bg from '@/assets/images/hero-bg-still.jpg';
import Button from '@/components/Button';
import DotGrid from '@/components/DotGrid';

const optimizedBg = await getImage({ src: bg });

export default function FullContactSection() {
  return (
    <section className="isolate flex min-h-screen flex-col items-center justify-center bg-primary lg:p-16 2xl:p-32">
      {/* Decoration */}
      <div className="relative w-full flex-grow">
        <span
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-cover bg-clip-text bg-center text-[40vh] font-bold tracking-tighter text-transparent"
          style={{ backgroundImage: `url(${optimizedBg.src})` }}
        >
          <span>4</span>
          <span>0</span>
          <span>4</span>
        </span>
      </div>

      {/* Content */}
      <div className="z-10 flex flex-col gap-6 rounded-2xl p-6 text-on-primary lg:bg-default lg:text-default xl:flex-row xl:items-end xl:gap-16">
        <h1 className="text-balance text-4xl lg:text-6xl">
          Woah, you found the 404 page!
        </h1>
        <div className="flex flex-col gap-6 md:flex-row md:items-center xl:gap-16">
          <p className="text-xl md:text-balance">
            Though, you were probably looking for something else. Check the URL
            or start from the home page.
          </p>
          <Button
            text="Let's go home"
            icon={House}
            iconSide="left"
            href="/"
            className="flex-shrink-0"
          />
        </div>
      </div>

      {/* Backgrounds */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/0 to-black/20" />
      <DotGrid />
    </section>
  );
}
