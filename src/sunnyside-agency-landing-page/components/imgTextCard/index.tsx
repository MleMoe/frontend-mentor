import { FC, ReactNode } from 'react';
import { useContainer } from '../../../../utils/hooks';
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
  const container = useContainer(768);

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
