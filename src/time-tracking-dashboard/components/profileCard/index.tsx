import { FC } from 'react';
import { TimeType } from '../dashboard';
import './index.scss';

type ProfileCardProps = {
	selectedTime: TimeType;
	timeArray: TimeType[];
	onSelect: (time: TimeType) => void;
};

const ProfileCard: FC<ProfileCardProps> = ({
	timeArray,
	selectedTime,
	onSelect,
}) => {
	return (
		<>
			<div className='profile-wrap'>
				<div className='avatar' />
				<div className='desc'>Report for</div>
				<div className='name'>Jeremy Robson</div>
			</div>
			<div className='time-wrap'>
				{timeArray.map((time, index) => (
					<div
						key={index}
						className={`time-item ${time === selectedTime ? 'selected' : ''}`}
						onClick={() => {
							onSelect(time);
						}}
					>
						{time}
					</div>
				))}
			</div>
		</>
	);
};

export { ProfileCard };
