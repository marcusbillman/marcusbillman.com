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
import { motion } from 'framer-motion';

interface NavbarProps {
  isMenuOpen: boolean;
  onClickMenuButton?: () => void;
}

export default function Navbar({ isMenuOpen, onClickMenuButton }: NavbarProps) {
  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      exit={{ y: -100 }}
      transition={{ duration: 0.5, ease: [0.2, 0, 0, 1] }}
      className={`pointer-events-none fixed left-4 right-4 top-4 z-50 flex items-stretch justify-between lg:left-8 lg:right-8`}
    >
      <a
        href="/"
        className={`${isMenuOpen ? '' : 'shadow-lg'} pointer-events-auto flex items-center gap-1 rounded-full bg-default px-4 font-medium transition-colors hover:bg-primary hover:text-on-primary lg:px-6 dark:border dark:border-default`}
      >
        <span>Marcus</span>
        <span className="font-serif italic">Billman</span>
      </a>
      <motion.div
        layout="position"
        className={`${isMenuOpen ? '' : 'shadow-lg lg:pl-6 dark:border dark:border-default'} pointer-events-auto flex items-center gap-6 rounded-full bg-default lg:p-2`}
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
        className={`flex items-center gap-1 transition-all hover:text-default ${isActive ? 'font-bold text-default' : 'text-subtle'}`}
      >
        <IconComponent weight={isActive ? 'fill' : 'regular'} />
        {text}
      </a>
    </li>
  );
}
