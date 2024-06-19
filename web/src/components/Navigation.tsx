import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Menu from '@/components/Menu';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function onClickMenuButton() {
    setIsMenuOpen(!isMenuOpen);
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
