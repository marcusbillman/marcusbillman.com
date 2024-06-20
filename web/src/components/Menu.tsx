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
import { BezierCurve, Browser, ButtonClick, Phone } from './illustrations';
import DotGrid from './DotGrid';

interface MenuProps {
  isMenuOpen: boolean;
  onClickMenuButton?: () => void;
}

export default function Menu({ isMenuOpen, onClickMenuButton }: MenuProps) {
  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 top-[5vh] z-40 flex flex-col gap-4 rounded-t-4xl bg-default p-4 shadow-lg lg:bottom-auto lg:top-0 lg:h-[564px] lg:flex-row lg:gap-8 lg:rounded-b-4xl lg:rounded-t-none lg:p-8 lg:pt-24">
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
        <div className="flex flex-grow flex-col gap-4 overflow-y-auto lg:flex-row lg:gap-8">
          <ul className="flex flex-col flex-wrap gap-2 lg:flex-[1] lg:flex-row lg:gap-4 2xl:flex-[3]">
            <MenuLink text="Home" url="/" icon={House}>
              <div className="absolute inset-0 -z-10 bg-[url('/assets/images/hero-bg-still.jpg')] bg-cover bg-center" />
              <DotGrid dim="default" />
              <BezierCurve className="absolute left-[30%] top-[25%]" />
              <Phone className="absolute left-[80%] top-[-10%]" />
              <ButtonClick className="absolute left-[-5%] top-[60%]" />
              <Browser className="absolute left-[60%] top-[70%]" />
            </MenuLink>
            <MenuLink text="Portfolio" url="/portfolio" icon={Images}>
              <div className="absolute inset-0 -z-10 bg-subtle" />
              <DotGrid dim="default" />
              <div className='absolute bottom-[60%] right-[30%] -z-10 aspect-square w-[100%] translate-x-1/2 translate-y-1/2 bg-[url("/assets/images/glow-blueberry.png")] bg-cover bg-center' />
              <img
                src="/assets/images/phone-iphone-15-plus.png"
                alt=""
                className="absolute bottom-[-5%] left-[15%] w-32 rotate-[15deg]"
              />
              <img
                src="/assets/images/phone-pixel-8.png"
                alt=""
                className="absolute bottom-[-30%] left-[50%] w-32 rotate-[5deg]"
              />
            </MenuLink>
            <MenuLink text="About" url="/about" icon={User}>
              <div className="absolute inset-0 -z-10 bg-subtle" />
              <DotGrid dim="default" />
              <div className='absolute bottom-[20%] left-[30%] -z-10 aspect-square w-96 bg-[url("/assets/images/glow-orange.png")] bg-cover bg-center' />
              <img
                src="/assets/images/portrait-1.png"
                alt=""
                className="absolute bottom-[0%] right-0 block w-72"
              />
            </MenuLink>
            <MenuLink text="Contact" url="/contact" icon={ChatsCircle}>
              <div className="absolute inset-0 -z-10 bg-subtle" />
              <DotGrid dim="default" />
            </MenuLink>
          </ul>
          <div className="flex flex-1 flex-col gap-4 xl:flex-[1]">
            <div className="grid flex-grow items-end lg:items-start">
              <SocialLinks compactOnMobile />
            </div>
            <div className="flex items-center justify-between">
              {/* TODO: Add theme switch */}
              {/* TODO: Add language switch */}
            </div>
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
  children?: React.ReactNode;
}

function MenuLink({ text, url, icon, children }: MenuLinkProps) {
  const IconComponent = icon;
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(window.location.pathname === url);
  }, [url]);

  return (
    <li className="group relative isolate min-w-64 flex-1 overflow-clip rounded-2xl">
      <a
        href={url}
        className={`block rounded-2xl px-5 py-4 transition-colors group-hover:border-2 group-hover:border-primary lg:h-full ${isActive ? 'border-2 border-primary' : 'border border-default'}`}
      >
        <div
          className={`flex items-center gap-2 text-3xl transition-colors group-hover:text-default ${isActive ? 'text-default' : 'text-subtle'}`}
        >
          <IconComponent size={32} />
          {text}
        </div>
        <div
          className={`${isActive ? '' : 'opacity-0 group-hover:opacity-100'} absolute inset-0 -z-10 transition-opacity`}
        >
          {children}
        </div>
      </a>
    </li>
  );
}
