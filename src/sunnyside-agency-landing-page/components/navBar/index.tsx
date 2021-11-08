import React, { FC, ReactElement, ReactNode } from 'react';
import './index.scss';

type NavBarPropsType = {
  title: ReactElement | string;
  navs: (ReactElement | string)[];
};
const NavBar: FC<NavBarPropsType> = ({ title, navs }) => {
  return (
    <div className='header-container'>
      <div className='title'>{title}</div>
      <div className='nav-container'>
        {navs.map((nav, index) => (
          <div className='nav-item' key={index}>
            {nav}
          </div>
        ))}
      </div>
    </div>
  );
};

export { NavBar };
