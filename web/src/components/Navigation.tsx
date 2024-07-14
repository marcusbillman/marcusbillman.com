import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Menu from '@/components/Menu';
import { AnimatePresence } from 'framer-motion';
import { useTailwindConfig } from '@/util/tailwind';
import { useMediaQuery } from 'usehooks-ts';
import { FocusOn } from 'react-focus-on';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const resolvedTailwindConfig = useTailwindConfig();

  const isDesktop = useMediaQuery(
    `(min-width: ${resolvedTailwindConfig.theme.screens.lg})`,
  );

  return (
    <FocusOn enabled={isMenuOpen}>
      <nav
        onKeyDown={(e) => {
          if (e.key === 'Escape') setIsMenuOpen(false);
        }}
      >
        <AnimatePresence initial={false}>
          {(isDesktop || !isMenuOpen) && (
            <Navbar
              isMenuOpen={isMenuOpen}
              onClickMenuButton={() => setIsMenuOpen(!isMenuOpen)}
            />
          )}
        </AnimatePresence>
        <AnimatePresence>
          {isMenuOpen && (
            <Menu
              isMenuOpen={isMenuOpen}
              onClose={() => setIsMenuOpen(!isMenuOpen)}
            />
          )}
        </AnimatePresence>
      </nav>
    </FocusOn>
  );
}
