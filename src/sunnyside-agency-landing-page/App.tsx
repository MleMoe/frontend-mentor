import { useMemo, useEffect } from 'react';
import './App.scss';
import { useWindowSize } from '../../utils/hooks';
import { HeaderBoard, ImgTextCard } from './components';

import imageEmily from './assets/images/image-emily.jpg';
import imageThomas from './assets/images/image-thomas.jpg';
import imageJennie from './assets/images/image-jennie.jpg';

import imageGalleryMilkbottles from './assets/images/desktop/image-gallery-milkbottles.jpg';
import imageGalleryOrange from './assets/images/desktop/image-gallery-orange.jpg';
import imageGalleryCone from './assets/images/desktop/image-gallery-cone.jpg';
import imageGallerySugarcubes from './assets/images/desktop/image-gallery-sugarcubes.jpg';

import { ClientCard } from './components/clientCard';

function App() {
  const baseImgUrl = '/src/sunnyside-agency-landing-page/assets/images/';
  const cardData = [
    {
      content: [
        <div className='card-title'>Transform your brand</div>,
        <div className='card-text'>
          We are a full-service creative agency specializing in helping brands
          grow fast. Engage your clients through compelling visuals that do most
          of the marketing for you.
        </div>,
        <div className='card-more'>
          LEARN MORE
          <div className='btn-more' />
        </div>,
      ],
    },
    {
      order: -1,
      backgroundImg: 'image-transform.jpg',
    },
    {
      backgroundImg: 'image-stand-out.jpg',
    },
    {
      content: [
        <div className='card-title'>Stand out to the right audience</div>,
        <div className='card-text'>
          Using a collaborative formula of designers, researchers,
          photographers, videographers, and copywriters, we’ll build and extend
          your brand in digital places.
        </div>,
        <div className='card-more'>
          LEARN MORE
          <div
            className='btn-more'
            style={{ backgroundColor: 'hsl(7, 99%, 70%)' }}
          />
        </div>,
      ],
    },
    {
      backgroundImg: 'image-graphic-design.jpg',
      content: [
        <div className='card-title'>Graphic design</div>,
        <div className='card-text'>
          Great design makes you memorable. We deliver artwork that underscores
          your brand message and captures potential clients’ attention.
        </div>,
      ],
    },
    {
      backgroundImg: 'image-photography.jpg',
      content: [
        <div className='card-title'>Photography</div>,
        <div className='card-text'>
          Increase your credibility by getting the most stunning, high-quality
          photos that improve your business image." your brand
        </div>,
      ],
    },
  ];

  const clientData = [
    {
      avater: imageEmily,
      comment:
        'We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.',
      name: 'Emily R.',
      position: 'Marketing Director',
    },
    {
      avater: imageThomas,
      comment:
        'Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.',
      name: 'Thomas S.',
      position: 'Chief Operating Officer',
    },
    {
      avater: imageJennie,
      comment:
        'Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!',
      name: 'Jennie F.',
      position: 'Business Owner',
    },
  ];

  const galleryData = [
    {
      backgroundImg: imageGalleryMilkbottles,
    },
    {
      backgroundImg: imageGalleryOrange,
    },
    {
      backgroundImg: imageGalleryCone,
    },
    {
      backgroundImg: imageGallerySugarcubes,
    },
  ];

  return (
    <div className='App'>
      <HeaderBoard />
      <div className='cards-container'>
        {cardData.map((card, index) => (
          <ImgTextCard key={index} {...card} />
        ))}
      </div>
      <div className='client-wrap'>
        <div className='client-title'>CLIENT TESTIMONIALS</div>
        <div className='client-container'>
          {clientData.map((client, index) => (
            <ClientCard key={index} {...client} />
          ))}
        </div>
      </div>
      <div className='gallery-container'>
        {galleryData.map((gallery, index) => (
          <div
            key={index}
            className='gallery-item'
            style={{ backgroundImage: `url(${gallery.backgroundImg})` }}
          />
        ))}
      </div>
      <footer className='footer-container'>
        <div className='footer-title'>sunnyside</div>
        <div className='footer-items'>
          {['About', 'Services', 'Projects'].map((item, index) => (
            <span key={index}>{item}</span>
          ))}
        </div>
        <div className='contact-icon'>
          <img src={baseImgUrl + 'icon-facebook.svg'} />
          <img src={baseImgUrl + 'icon-instagram.svg'} />
          <img src={baseImgUrl + 'icon-twitter.svg'} />
          <img src={baseImgUrl + 'icon-pinterest.svg'} />
        </div>
      </footer>
    </div>
  );
}

export default App;
