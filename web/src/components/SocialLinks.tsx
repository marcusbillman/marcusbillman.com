import { ArrowUpRight, Copy } from '@phosphor-icons/react/dist/ssr';
import CopyToClipboard from '@/components/CopyToClipboard';

interface Props {
  forceDark?: boolean;
  compactOnMobile?: boolean;
}

export default function SocialLinks({
  forceDark = false,
  compactOnMobile = false,
}: Props) {
  const EMAIL = 'hello@marcusbillman.com';

  return (
    <ul
      className={`${compactOnMobile ? 'gap-y-3 lg:gap-y-6' : 'gap-y-6'} grid flex-1 grid-cols-2`}
    >
      <SocialLink
        primaryText="LinkedIn"
        secondaryText="Networking"
        url="https://m-b.me/linkedin"
        forceDark={forceDark}
        compactOnMobile={compactOnMobile}
      />
      <SocialLink
        primaryText="GitHub"
        secondaryText="Code"
        url="https://m-b.me/github"
        forceDark={forceDark}
        compactOnMobile={compactOnMobile}
      />
      <SocialLink
        primaryText="Dribbble"
        secondaryText="Design"
        url="https://m-b.me/dribbble"
        forceDark={forceDark}
        compactOnMobile={compactOnMobile}
      />
      <SocialLink
        primaryText="SoundCloud"
        secondaryText="Music"
        url="https://m-b.me/soundcloud"
        forceDark={forceDark}
        compactOnMobile={compactOnMobile}
      />
      <li className="col-span-2">
        <span
          className={`${forceDark ? 'text-gray-400' : 'text-subtle'} ${compactOnMobile ? 'hidden lg:inline' : ''} font-medium`}
        >
          Email
        </span>
        <CopyToClipboard text={EMAIL}>
          <button className="group mt-1 flex cursor-pointer items-center gap-1">
            <span className={`${compactOnMobile ? 'lg:text-xl' : 'text-xl'}`}>
              {EMAIL}
            </span>
            <Copy
              size={24}
              className={`${forceDark ? 'text-gray-400 group-hover:text-white' : 'text-subtle group-hover:text-default'} transition-all duration-500 ease-smooth group-hover:rotate-180`}
            />
          </button>
        </CopyToClipboard>
      </li>
    </ul>
  );
}

interface SocialLinkProps {
  primaryText: string;
  secondaryText: string;
  url: string;
  forceDark: boolean;
  compactOnMobile: boolean;
}

function SocialLink({
  primaryText,
  secondaryText,
  url,
  forceDark,
  compactOnMobile,
}: SocialLinkProps) {
  return (
    <li>
      <span
        className={`${forceDark ? 'text-gray-400' : 'text-subtle'} ${compactOnMobile ? 'hidden lg:inline' : ''} font-medium`}
      >
        {secondaryText}
      </span>
      <a href={url} className="group mt-1 flex items-center gap-1">
        <span className={`${compactOnMobile ? 'lg:text-xl' : 'text-xl'}`}>
          {primaryText}
        </span>
        <ArrowUpRight
          size={16}
          className={`${compactOnMobile ? 'lg:hidden' : 'hidden'} ${forceDark ? 'text-gray-400 group-hover:text-white' : 'text-subtle group-hover:text-default'} transition-all duration-500 ease-smooth group-hover:-translate-y-[20%] group-hover:translate-x-[20%]`}
        />
        <ArrowUpRight
          size={24}
          className={`${compactOnMobile ? 'hidden lg:block' : ''} ${forceDark ? 'text-gray-400 group-hover:text-white' : 'text-subtle group-hover:text-default'} transition-all duration-500 ease-smooth group-hover:-translate-y-[20%] group-hover:translate-x-[20%]`}
        />
      </a>
    </li>
  );
}
