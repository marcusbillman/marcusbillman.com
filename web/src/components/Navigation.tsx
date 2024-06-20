import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Menu from '@/components/Menu';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function onClickMenuButton() {
    setIsMenuOpen(!isMenuOpen);

    if (!isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }

  return (
    <nav>
      <Navbar isMenuOpen={isMenuOpen} onClickMenuButton={onClickMenuButton} />
      {isMenuOpen && (
        <Menu isMenuOpen={isMenuOpen} onClickMenuButton={onClickMenuButton} />
      )}
    </nav>
  );
}
