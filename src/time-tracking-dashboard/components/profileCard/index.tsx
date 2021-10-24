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
				<div className='profile-desc'>
					<div className='desc'>Report for</div>
					<div className='name'>Jeremy Robson</div>
				</div>
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
						{time[0].toUpperCase() + time.substring(1)}
					</div>
				))}
			</div>
		</>
	);
};

export { ProfileCard };
