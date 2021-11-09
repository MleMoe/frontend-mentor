import { FC, ReactNode } from 'react';
import { useContainer } from '../../../../utils/hooks';
import './index.scss';

const baseImgUrl = '/sunnyside-agency-landing-page/images/';

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
  const container = useContainer(768);

  const imgUrl = backgroundImg && baseImgUrl + container + '/' + backgroundImg;

  return (
    <div
      className={
        'img-text-card ' +
        container +
        (backgroundImg && content ? ' imgTextWrap' : '')
      }
      style={{
        ...(imgUrl ? { backgroundImage: `url(${imgUrl})` } : {}),
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
