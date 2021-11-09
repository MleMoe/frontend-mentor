import { NavBar } from '..';
import './index.scss';
import { useContainer } from '../../../../utils/hooks';

import iconArrowDown from '../../assets/images/icon-arrow-down.svg';

const HeaderBoard = () => {
  const container = useContainer(768);

  const navs = [
    'About',
    'Services',
    'Projects',
    <div className={'btn-contact ' + container}>CONTACT</div>,
  ];

  return (
    <div className='main'>
      <div className='main-content'>
        <NavBar title='sunnyside' navs={navs} container={container} />
        <div className='text'>WE ARE CREATIVES</div>
        <div className='arrow'>
          <img src={iconArrowDown} />
        </div>
      </div>
    </div>
  );
};

export { HeaderBoard };
