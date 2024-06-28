import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Menu from '@/components/Menu';
import { AnimatePresence } from 'framer-motion';
import { useTailwindConfig } from '@/util/tailwind';
import { useMediaQuery } from 'usehooks-ts';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const resolvedTailwindConfig = useTailwindConfig();

  const isDesktop = useMediaQuery(
    `(min-width: ${resolvedTailwindConfig.theme.screens.lg})`,
  );

  function onClickMenuButton() {
    setIsMenuOpen(!isMenuOpen);

    if (!isMenuOpen) {
      const scrollBarWidth =
        window.innerWidth - document.documentElement.clientWidth;
      document.body.style.paddingRight = `${scrollBarWidth}px`;
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.paddingRight = '0';
      document.body.style.overflow = 'auto';
    }
  }

  return (
    <nav>
      <AnimatePresence initial={false}>
        {(isDesktop || !isMenuOpen) && (
          <Navbar
            isMenuOpen={isMenuOpen}
            onClickMenuButton={onClickMenuButton}
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isMenuOpen && (
          <Menu isMenuOpen={isMenuOpen} onClickMenuButton={onClickMenuButton} />
        )}
      </AnimatePresence>
    </nav>
  );
}
