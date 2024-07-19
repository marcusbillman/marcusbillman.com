import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { FocusOn } from 'react-focus-on';
import { useMediaQuery } from 'usehooks-ts';

import Menu from '@/components/Menu';
import Navbar from '@/components/Navbar';
import { useTailwindConfig } from '@/util/tailwind';

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
          {isMenuOpen && <Menu onClose={() => setIsMenuOpen(!isMenuOpen)} />}
        </AnimatePresence>
      </nav>
    </FocusOn>
  );
}
