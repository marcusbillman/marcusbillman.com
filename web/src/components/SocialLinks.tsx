import { ArrowUpRight, Copy } from '@phosphor-icons/react/dist/ssr';
import { useCopyToClipboard } from 'usehooks-ts';
import toast, { Toaster } from 'react-hot-toast';
import confetti from 'canvas-confetti';

interface Props {
  forceDark?: boolean;
}

export default function SocialLinks({ forceDark = false }: Props) {
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
    <ul className="grid flex-1 grid-cols-2 gap-y-6">
      <Toaster position="bottom-center" toastOptions={{ duration: 3000 }} />
      <SocialLink
        primaryText="LinkedIn"
        secondaryText="Networking"
        url="https://m-b.me/linkedin"
        forceDark={forceDark}
      />
      <SocialLink
        primaryText="GitHub"
        secondaryText="Code"
        url="https://m-b.me/github"
        forceDark={forceDark}
      />
      <SocialLink
        primaryText="Dribbble"
        secondaryText="Design"
        url="https://m-b.me/dribbble"
        forceDark={forceDark}
      />
      <SocialLink
        primaryText="SoundCloud"
        secondaryText="Music"
        url="https://m-b.me/soundcloud"
        forceDark={forceDark}
      />
      <li className="col-span-2">
        <span
          className={`${forceDark ? 'text-gray-500' : 'text-subtle'} font-medium`}
        >
          Email
        </span>
        <a
          className="group mt-1 flex cursor-pointer items-center gap-1"
          onClick={(event: React.MouseEvent) => handleClickCopy(event, email)}
        >
          <span className="text-xl">{email}</span>
          <Copy
            size={24}
            className={`${forceDark ? 'text-gray-500 group-hover:text-white' : 'text-subtle group-hover:text-default'} transition-all duration-500 ease-smooth group-hover:rotate-180`}
          />
        </a>
      </li>
    </ul>
  );
}

interface SocialLinkProps {
  primaryText: string;
  secondaryText: string;
  url: string;
  forceDark: boolean;
}

function SocialLink({
  primaryText,
  secondaryText,
  url,
  forceDark,
}: SocialLinkProps) {
  return (
    <li>
      <span
        className={`${forceDark ? 'text-gray-500' : 'text-subtle'} font-medium`}
      >
        {secondaryText}
      </span>
      <a href={url} className="group mt-1 flex items-center gap-1">
        <span className="text-xl">{primaryText}</span>
        <ArrowUpRight
          size={24}
          className={`${forceDark ? 'text-gray-500 group-hover:text-white' : 'text-subtle group-hover:text-default'} transition-all duration-500 ease-smooth group-hover:-translate-y-[20%] group-hover:translate-x-[20%]`}
        />
      </a>
    </li>
  );
}
