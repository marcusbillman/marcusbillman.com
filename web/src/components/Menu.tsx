import Button from '@/components/Button';
import type { Icon } from '@phosphor-icons/react/dist/lib/types';
import {
  ChatsCircle,
  House,
  Images,
  User,
  X,
} from '@phosphor-icons/react/dist/ssr';
import { useEffect, useState } from 'react';
import SocialLinks from './SocialLinks';

interface MenuProps {
  isMenuOpen: boolean;
  onClickMenuButton?: () => void;
}

export default function Menu({ isMenuOpen, onClickMenuButton }: MenuProps) {
  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 z-40 flex h-[90vh] flex-col gap-4 rounded-t-4xl bg-default p-4 lg:bottom-auto lg:top-0 lg:h-[564px] lg:flex-row lg:gap-8 lg:rounded-b-4xl lg:rounded-t-none lg:p-8 lg:pt-24">
        <div className="flex items-center justify-between lg:hidden">
          <h2 className="font-serif text-xl font-medium italic">Menu</h2>
          <Button
            text="Close"
            icon={X}
            style="subtle"
            iconSide="right"
            size="small"
            onClick={onClickMenuButton}
          />
        </div>
        <ul className="flex flex-col gap-2 lg:flex-[3] lg:flex-row lg:gap-6">
          <MenuLink text="Home" url="/" icon={House} />
          <MenuLink text="Portfolio" url="/portfolio" icon={Images} />
          <MenuLink text="About" url="/about" icon={User} />
          <MenuLink text="Contact" url="/contact" icon={ChatsCircle} />
        </ul>
        <div className="flex flex-grow flex-col gap-4 lg:flex-[1]">
          <div className="grid flex-grow items-center lg:items-start">
            <SocialLinks />
          </div>
          <div className="flex items-center justify-between">
            {/* TODO: Add theme switch */}
            {/* TODO: Add language switch */}
          </div>
        </div>
      </div>
      <div
        className={`fixed inset-0 left-0 right-0 top-0 isolate z-30 h-screen bg-black/50`}
        onClick={onClickMenuButton}
      />
    </>
  );
}

interface MenuLinkProps {
  text: string;
  url: string;
  icon: Icon;
}

function MenuLink({ text, url, icon }: MenuLinkProps) {
  const IconComponent = icon;
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(window.location.pathname === url);
  }, [url]);

  return (
    <li className="flex-1">
      {/* TODO: Show decorative background from children prop */}
      <a
        href={url}
        className={`block rounded-2xl px-5 py-4 lg:h-full ${isActive ? 'h-40 border-2 border-primary' : 'border border-default'}`}
      >
        <div
          className={`flex items-center gap-2 text-3xl ${isActive ? 'text-default' : 'text-subtle'}`}
        >
          <IconComponent size={32} />
          {text}
        </div>
      </a>
    </li>
  );
}
