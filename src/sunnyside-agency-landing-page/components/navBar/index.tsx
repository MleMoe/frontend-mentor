import React, { FC, ReactElement, useState } from 'react';
import iconHamburger from '../../assets/images/icon-hamburger.svg';
import './index.scss';

type NavBarPropsType = {
  title: ReactElement | string;
  navs: (ReactElement | string)[];
  container: 'mobile' | 'desktop';
};
const NavBar: FC<NavBarPropsType> = ({ title, navs, container }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='header-container'>
      <div className='title'>{title}</div>
      <div>
        {container === 'mobile' && (
          <>
            <img src={iconHamburger} onClick={() => setIsOpen((old) => !old)} />
            {isOpen && <div className='triangle' />}
          </>
        )}

        {(isOpen || container === 'desktop') && (
          <div className={'nav-container ' + container}>
            {navs.map((nav, index) => (
              <div className={'nav-item ' + container} key={index}>
                {nav}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export { NavBar };
