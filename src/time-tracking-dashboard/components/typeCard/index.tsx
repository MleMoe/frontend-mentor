import { FC } from 'react';
import { TimeType } from '../dashboard';
import './index.scss';

export type ActivityType = {
	title: string;
	timeframes: {
		[key in TimeType]: {
			current: number;
			previous: number;
		};
	};
};

type TypeCardProps = {
	activity: ActivityType;
	timeType: TimeType;
};

const TypeCard: FC<TypeCardProps> = ({ activity, timeType }) => {
	return (
		<div className='type-card'>
			<div className='type-title'>
				<div>{activity.title}</div>
				<div className='title-more'>...</div>
			</div>
			<div className='type-time-desc'>
				<div className='time-current'>
					{activity.timeframes[timeType].current}hrs
				</div>
				<div className='time-previous'>
					Last {timeType} - {activity.timeframes[timeType].previous}hrs
				</div>
			</div>
		</div>
	);
};

export { TypeCard };
