import {
  ChatsCircle,
  House,
  Images,
  List,
  User,
  X,
} from '@phosphor-icons/react/dist/ssr';
import { useEffect, useState } from 'react';
import Button from '@/components/Button';
import type { Icon } from '@phosphor-icons/react/dist/lib/types';
import { motion, useReducedMotion } from 'framer-motion';

interface NavbarProps {
  isMenuOpen: boolean;
  onClickMenuButton?: () => void;
}

export default function Navbar({ isMenuOpen, onClickMenuButton }: NavbarProps) {
  const shouldReduceMotion = useReducedMotion();

  const outProperties = {
    y: shouldReduceMotion ? 0 : '-100',
    opacity: shouldReduceMotion ? 0 : 1,
  };

  return (
    <motion.div
      initial={outProperties}
      animate={{ y: 0, opacity: 1 }}
      exit={outProperties}
      transition={{ duration: 0.5, ease: [0.2, 0, 0, 1] }}
      className={`pointer-events-none fixed left-4 right-4 top-4 z-50 flex items-stretch justify-between lg:left-8 lg:right-8`}
    >
      <a
        href="/"
        className={`${isMenuOpen ? '' : 'shadow-lg'} pointer-events-auto flex items-center gap-1 rounded-full bg-default px-4 font-medium transition-all hover:bg-primary hover:text-on-primary active:scale-75 active:opacity-50 lg:px-6 dark:border`}
      >
        <span>Marcus</span>
        <span className="font-serif italic">Billman</span>
      </a>
      <motion.div
        layout={shouldReduceMotion ? false : 'position'}
        className={`${isMenuOpen ? '' : 'shadow-lg lg:pl-6 dark:border'} pointer-events-auto flex items-center gap-6 rounded-full bg-default lg:p-2`}
      >
        {!isMenuOpen && (
          <motion.ul className={`hidden gap-6 lg:flex lg:items-center`}>
            <NavbarLink text="Home" url="/" icon={House} />
            <NavbarLink text="Portfolio" url="/portfolio" icon={Images} />
            <NavbarLink text="About" url="/about" icon={User} />
            <NavbarLink text="Contact" url="/contact" icon={ChatsCircle} />
          </motion.ul>
        )}
        <Button
          text={isMenuOpen ? 'Close' : 'Menu'}
          icon={isMenuOpen ? X : List}
          style={isMenuOpen ? 'subtle' : 'default'}
          iconSide="right"
          size="small"
          onClick={onClickMenuButton}
        />
      </motion.div>
    </motion.div>
  );
}

interface NavbarLinkProps {
  text: string;
  url: string;
  icon: Icon;
}

function NavbarLink({ text, url, icon }: NavbarLinkProps) {
  const IconComponent = icon;
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(window.location.pathname === url);
  }, [url]);

  return (
    <li>
      <a
        href={url}
        className={`flex items-center gap-1 transition-all hover:text-default active:scale-75 active:opacity-50 ${isActive ? 'font-bold text-default' : 'text-subtle'}`}
        aria-current={isActive ? 'page' : undefined}
      >
        <IconComponent weight={isActive ? 'fill' : 'regular'} />
        {text}
      </a>
    </li>
  );
}
