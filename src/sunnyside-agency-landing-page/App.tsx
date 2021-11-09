import './App.scss';
import { HeaderBoard, ImgTextCard, ClientCard } from './components';

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
        <div className='card-title' style={{ color: 'hsl(167, 40%, 24%)' }}>
          Graphic design
        </div>,
        <div className='card-text' style={{ color: 'hsl(167, 40%, 24%)' }}>
          Great design makes you memorable. We deliver artwork that underscores
          your brand message and captures potential clients’ attention.
        </div>,
      ],
    },
    {
      backgroundImg: 'image-photography.jpg',
      content: [
        <div className='card-title' style={{ color: 'hsl(198, 62%, 26%)' }}>
          Photography
        </div>,
        <div className='card-text' style={{ color: 'hsl(198, 62%, 26%)' }}>
          Increase your credibility by getting the most stunning, high-quality
          photos that improve your business image." your brand
        </div>,
      ],
    },
  ];

  const clientData = [
    {
      avater: baseImgUrl + 'image-emily.jpg',
      comment:
        'We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.',
      name: 'Emily R.',
      position: 'Marketing Director',
    },
    {
      avater: baseImgUrl + 'image-thomas.jpg',
      comment:
        'Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.',
      name: 'Thomas S.',
      position: 'Chief Operating Officer',
    },
    {
      avater: baseImgUrl + 'image-jennie.jpg',
      comment:
        'Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!',
      name: 'Jennie F.',
      position: 'Business Owner',
    },
  ];

  const galleryData = [
    {
      backgroundImg: baseImgUrl + 'desktop/image-gallery-milkbottles.jpg',
    },
    {
      backgroundImg: baseImgUrl + 'desktop/image-gallery-orange.jpg',
    },
    {
      backgroundImg: baseImgUrl + 'desktop/image-gallery-cone.jpg',
    },
    {
      backgroundImg: baseImgUrl + 'desktop/image-gallery-Sugarcubes.jpg',
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
