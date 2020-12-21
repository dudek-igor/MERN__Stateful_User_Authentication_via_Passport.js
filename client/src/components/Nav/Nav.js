import React, { useState, useEffect } from 'react';

// Components
import { MobileMenu, StaticMenu } from './Menu/Menu';
import Burger from './Burger/Burger';
import Logo from './Logo/Logo';
import ThemeToggler from './ThemeToggler/ThemeToggler';

// Style
import { StyledNavWrapper } from './Nav.styled';

const Nav = () => {
  // State for open/close mobile menu
  const [open, setOpen] = useState(false);
  // State for Mobile/Static Menu
  const [isMobile, setMobile] = useState(
    typeof window !== `undefined` && window.innerWidth <= 800
  );

  useEffect(() => {
    // Listener for changing window width
    let mediaQuery;
    if (typeof window !== `undefined`) {
      mediaQuery = window.matchMedia(`(max-width: 800px)`);
      mediaQuery.addEventListener('change', (e) => {
        setMobile(e.matches);
      });
    }
    // Cleanup
    return () => {
      mediaQuery.removeEventListener('change', (e) => {
        setMobile(e.matches);
      });
    };
  }, []);
  // All Navigation depend on window width */
  return (
    <>
      <StyledNavWrapper>
        <Logo />
        {!isMobile && <ThemeToggler />}
        {isMobile && <Burger open={open} setOpen={setOpen} />}
        {!isMobile && <StaticMenu />}
      </StyledNavWrapper>
      {isMobile && <MobileMenu open={open} setOpen={setOpen} />}
    </>
  );
};

export default Nav;
