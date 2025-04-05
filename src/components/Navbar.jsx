import React, { useEffect, useRef, useState } from 'react'
import { navItems } from '../constents';
import Button from './Button';
import { useWindowScroll } from 'react-use';
import gsap from 'gsap';
import { RxCross2, RxHamburgerMenu } from 'react-icons/rx';
import { Link } from 'react-router-dom';

const Navbar = () => {

  const [lastScrollY, setLastScrollY] = useState(0);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const navContainerRef = useRef(null);
  const {y: currentScrollY} = useWindowScroll();

  useEffect(() => {
    if (currentScrollY === 0) {
      // Topmost position: show navbar without floating-nav
      setIsNavVisible(true);
      navContainerRef.current.classList.remove("floating-nav");
    } else if (currentScrollY > lastScrollY) {
      // Scrolling down: hide navbar and apply floating-nav
      setIsNavVisible(false);
      navContainerRef.current.classList.add("floating-nav");
    } else if (currentScrollY < lastScrollY) {
      // Scrolling up: show navbar with floating-nav
      setIsNavVisible(true);
      navContainerRef.current.classList.add("floating-nav");
    }

    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY]);

   // Animation effect for navbar visibility
  useEffect(() => {
    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.2,
    });
  }, [isNavVisible]);
  
  return (
    <div ref={navContainerRef} className='fixed bg-gradient-to-r from-gray-700 to-black rounded-lg inset-x-0 top-2 sm:top-4 z-50 h-12 sm:h-14 border-none transition-all duration-500 sm:inset-x-2 md:inset-x-6'>
      <header className='absolute top-1/2 w-full -translate-y-1/2'>
        <nav className='flex size-full items-center justify-between p-2'>
          <div>
            <img src="/logo-white-think-school.webp" alt="Think School Logo" className='w-28 sm:w-40'/>
          </div>

          {/* Desktop Navigation */}
          <div className='hidden md:flex h-full items-center'>
            {navItems.map((item) => (
              <Link
                key={item.url}
                to={item.url}
                className='relative ms-6 md:ms-10 font-general text-xs uppercase text-blue-50  after:absolute after:-bottom-0.5 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100 dark:after:bg-white cursor-pointer'
              >{item.name}</Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className='md:hidden flex items-center'>
            <Button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className={'p-2 text-white'}>
              {isMobileMenuOpen ? (<RxCross2/>) : (<RxHamburgerMenu />)}
            </Button>
          </div>

          <Button className="hidden sm:block text-white border border-white px-4 sm:px-6.5 py-1 rounded-2xl text-xs sm:text-sm">
            Log In
          </Button>
        </nav>

        {/* Mobile Navigation menu */}
        {isMobileMenuOpen && (
          <div className='md:hidden absolute w-full bg-black bg-opacity-90 py-4 px-6 mt-2 rounded-lg transition-all duration-300 ease-in-out'>
            <div className='flex flex-col space-y-4'>
              {navItems.map((item) => (
                <Link 
                  key={item.url}
                  to={item.url}
                  className='text-blue-50 text-sm uppercase py-2 border-b border-gray-800'
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button className="text-white border border-white px-4  py-1 rounded-2xl text-sm self-start mt-2">
                Log In
              </Button>
            </div>
          </div>
        )}
      </header>
    </div>
  )
}

export default Navbar