import { Link, MusicNotes, Shapes } from '@phosphor-icons/react/dist/ssr';
import SocialLinks from '@/components/SocialLinks';

export default function Footer() {
  return (
    <footer className="relative z-10 -mt-8 bg-black px-4 pb-8 pt-16 text-white lg:-mt-16 lg:px-16 lg:pb-16 lg:pt-32">
      <div className="grid h-96 place-items-center rounded-2xl bg-gray-500 bg-[url('/assets/images/footer-toybox-bg.jpg')] bg-cover bg-center lg:h-[40vw]">
        <div className="text-center text-3xl text-white/60 lg:text-4xl 2xl:text-6xl">
          <span className="block translate-x-[-10%]">
            Arranging
            <span className="font-serif italic text-white"> links </span>
            <Link size={32} className="inline text-white 2xl:hidden" />
            <Link size={64} className="hidden text-white 2xl:inline" />
          </span>
          <span className="block translate-x-[25%]">
            and
            <span className="font-serif italic text-white"> shapes </span>
            <Shapes size={32} className="inline text-white 2xl:hidden" />{' '}
            <Shapes size={64} className="hidden text-white 2xl:inline" />
          </span>
          <span className="block">
            into
            <span className="font-serif italic text-white"> melodies </span>
            <MusicNotes size={32} className="inline text-white 2xl:hidden" />
            <MusicNotes size={64} className="hidden text-white 2xl:inline" />
          </span>
        </div>
      </div>
      <div className="mt-8 flex flex-col gap-8 lg:mt-16 lg:flex-row">
        <div className="flex-1">
          <p className="text-2xl lg:text-4xl">Marcus Billman</p>
          <p className="mt-6 max-w-prose text-balance">
            &copy; 2024 Marcus Billman. Website designed and built with ❤️✨ by
            me. Check out the{' '}
            <a
              href="https://www.figma.com/design/eu6rt3MLe69pZndtZzS6Vg/Main"
              target="_blank"
              className="text-blueberry-300 underline underline-offset-1 transition-all hover:text-white hover:underline-offset-4"
            >
              Figma design file
            </a>{' '}
            and{' '}
            <a
              href="https://github.com/marcusbillman/marcusbillman.com-2024"
              target="_blank"
              className="text-blueberry-300 underline underline-offset-1 transition-all hover:text-white hover:underline-offset-4"
            >
              GitHub repository
            </a>
            .
          </p>
        </div>
        <SocialLinks forceDark />
      </div>
    </footer>
  );
}
