import { NavBar } from '..';
import './index.scss';
import iconArrowDown from '../../assets/images/icon-arrow-down.svg';

const HeaderBoard = () => {
  const navs = [
    'About',
    'Services',
    'Projects',
    <div className='btn-contact'>CONTACT</div>,
  ];
  return (
    <div className='main'>
      <div className='main-content'>
        <NavBar title='sunnyside' navs={navs} />
        <div className='text'>WE ARE CREATIVES</div>
        <div className='arrow'>
          <img src={iconArrowDown} />
        </div>
      </div>
    </div>
  );
};

export { HeaderBoard };
