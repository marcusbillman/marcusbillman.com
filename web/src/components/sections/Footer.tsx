import {
  ArrowUpRight,
  Copy,
  Link,
  MusicNotes,
  Shapes,
} from '@phosphor-icons/react/dist/ssr';
import { useCopyToClipboard } from 'usehooks-ts';
import toast, { Toaster } from 'react-hot-toast';
import confetti from 'canvas-confetti';

export default function Footer() {
  const [copiedText, copy] = useCopyToClipboard();
  const email = 'hello@marcusbillman.com';

  function handleClickCopy(event: React.MouseEvent, text: string) {
    copy(text)
      .then(() => {
        toast.success('Copied!');
        confetti({
          origin: {
            x: event.clientX / window.innerWidth,
            y: event.clientY / window.innerHeight,
          },
          startVelocity: 20,
        });
      })
      .catch((error) => {
        toast.error("Couldn't copy! 😢");
        console.error(error);
      });
  }

  return (
    <footer className="-mt-8 bg-black px-4 pb-8 pt-16 text-white lg:-mt-16 lg:px-16 lg:pb-16 lg:pt-32">
      <Toaster position="bottom-center" toastOptions={{ duration: 3000 }} />
      <div className="grid h-96 place-items-center rounded-2xl bg-gray-500 bg-[url('/assets/images/footer-toybox-bg.jpg')] bg-cover bg-center lg:h-[768px]">
        <div className="text-center text-3xl text-white/60 lg:text-6xl">
          <span className="block translate-x-[-10%]">
            Arranging
            <span className="font-serif italic text-white"> links </span>
            <Link size={32} className="inline text-white lg:hidden" />
            <Link size={64} className="hidden text-white lg:inline" />
          </span>
          <span className="block translate-x-[25%]">
            and
            <span className="font-serif italic text-white"> shapes </span>
            <Shapes size={32} className="inline text-white lg:hidden" />{' '}
            <Shapes size={64} className="hidden text-white lg:inline" />
          </span>
          <span className="block">
            into
            <span className="font-serif italic text-white"> melodies </span>
            <MusicNotes size={32} className="inline text-white lg:hidden" />
            <MusicNotes size={64} className="hidden text-white lg:inline" />
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
        <ul className="grid flex-1 grid-cols-2 gap-y-6">
          <li>
            <span className="font-medium text-gray-500">Networking</span>
            <a
              href="https://m-b.me/linkedin"
              className="group mt-1 flex items-center gap-1"
            >
              <span className="text-xl">LinkedIn</span>
              <ArrowUpRight
                size={24}
                className="text-gray-500 transition-all duration-500 ease-smooth group-hover:-translate-y-[20%] group-hover:translate-x-[20%] group-hover:text-white"
              />
            </a>
          </li>
          <li>
            <span className="font-medium text-gray-500">Code</span>
            <a
              href="https://m-b.me/github"
              className="group mt-1 flex items-center gap-1"
            >
              <span className="text-xl">GitHub</span>
              <ArrowUpRight
                size={24}
                className="text-gray-500 transition-all duration-500 ease-smooth group-hover:-translate-y-[20%] group-hover:translate-x-[20%] group-hover:text-white"
              />
            </a>
          </li>
          <li>
            <span className="font-medium text-gray-500">Design</span>
            <a
              href="https://m-b.me/dribbble"
              className="group mt-1 flex items-center gap-1"
            >
              <span className="text-xl">Dribbble</span>
              <ArrowUpRight
                size={24}
                className="text-gray-500 transition-all duration-500 ease-smooth group-hover:-translate-y-[20%] group-hover:translate-x-[20%] group-hover:text-white"
              />
            </a>
          </li>
          <li>
            <span className="font-medium text-gray-500">Music</span>
            <a
              href="https://m-b.me/soundcloud"
              className="group mt-1 flex items-center gap-1"
            >
              <span className="text-xl">SoundCloud</span>
              <ArrowUpRight
                size={24}
                className="text-gray-500 transition-all duration-500 ease-smooth group-hover:-translate-y-[20%] group-hover:translate-x-[20%] group-hover:text-white"
              />
            </a>
          </li>
          <li className="col-span-2">
            <span className="font-medium text-gray-500">Email</span>
            <a
              className="group mt-1 flex cursor-pointer items-center gap-1"
              onClick={(event: React.MouseEvent) =>
                handleClickCopy(event, email)
              }
            >
              <span className="text-xl">hello@marcusbillman.com</span>
              <Copy
                size={24}
                className="text-gray-500 transition-all duration-500 ease-smooth group-hover:rotate-180 group-hover:text-white"
              />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
