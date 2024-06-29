import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Menu from '@/components/Menu';
import { AnimatePresence } from 'framer-motion';
import { useTailwindConfig } from '@/util/tailwind';
import { useMediaQuery } from 'usehooks-ts';
import { disableBodyScroll, enableBodyScroll } from '@/util/document';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const resolvedTailwindConfig = useTailwindConfig();

  const isDesktop = useMediaQuery(
    `(min-width: ${resolvedTailwindConfig.theme.screens.lg})`,
  );

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
    isMenuOpen ? enableBodyScroll() : disableBodyScroll();
  }

  return (
    <nav>
      <AnimatePresence initial={false}>
        {(isDesktop || !isMenuOpen) && (
          <Navbar isMenuOpen={isMenuOpen} onClickMenuButton={toggleMenu} />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isMenuOpen && <Menu isMenuOpen={isMenuOpen} onClose={toggleMenu} />}
      </AnimatePresence>
    </nav>
  );
}
