import { FC, ReactNode, useMemo } from 'react';
import { useWindowSize } from '../../../../utils/hooks';
import './index.scss';

type ImgTextCardPropsType = {
  /**
   * bg-img url or color
   */
  backgroundImg?: string;
  content?: ReactNode;
  order?: number;
};
const ImgTextCard: FC<ImgTextCardPropsType> = ({
  backgroundImg,
  content,
  order,
}) => {
  const baseImgUrl = '/src/sunnyside-agency-landing-page/assets/images/';
  const windowSize = useWindowSize();
  const container = useMemo(
    () => (windowSize.width < 769 ? 'mobile' : 'desktop'),
    [windowSize]
  );

  return (
    <div
      className={
        'img-text-card ' +
        container +
        (backgroundImg && content ? ' imgTextWrap' : '')
      }
      style={{
        backgroundImage: `url(${
          baseImgUrl + '/' + container + '/' + backgroundImg
        })`,
        order: container === 'desktop' ? 0 : order,
      }}
    >
      <div
        className={
          'card-content ' +
          container +
          `${backgroundImg && content ? ' imgText' : ''}`
        }
      >
        {content}
      </div>
    </div>
  );
};

export { ImgTextCard };

export type { ImgTextCardPropsType };
