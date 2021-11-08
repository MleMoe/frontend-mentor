import { FC, ReactNode } from 'react';
import './index.scss';

type ClientCardPropsType = {
  avater: string;
  comment: string;
  name: string;
  position: string;
};
const ClientCard: FC<ClientCardPropsType> = ({
  avater,
  comment,
  name,
  position,
}) => {
  return (
    <div className='client-card'>
      <div
        className='client-avater'
        style={{ backgroundImage: `url(${avater})` }}
      />
      <div className='client-comment'>{comment}</div>
      <div>
        <div className='client-name'>{name}</div>
        <div className='client-position'>{position}</div>
      </div>
    </div>
  );
};

export { ClientCard };

export type { ClientCardPropsType };
