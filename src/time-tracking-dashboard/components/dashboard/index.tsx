import { FC, useState } from 'react';
import { ProfileCard } from '../profileCard';
import { ActivityType, TypeCard } from '../typeCard';
import styles from './index.module.scss';

export type TimeType = 'daily' | 'weekly' | 'monthly';

type DashboardProps = {
	activities: ActivityType[];
};

const Dashboard: FC<DashboardProps> = ({ activities }) => {
	const timeArray: TimeType[] = ['daily', 'weekly', 'monthly'];
	const [selectedTime, setSelectedTime] = useState<TimeType>('weekly');

	const onSelect = (time: TimeType) => {
		setSelectedTime(time);
	};

	return (
		<div className={styles.container}>
			<div className={`${styles.item} ${styles.itemProfile}`}>
				<ProfileCard
					selectedTime={selectedTime}
					timeArray={timeArray}
					onSelect={onSelect}
				/>
			</div>
			{activities.map((item, index) => (
				<div key={index} className={styles.item}>
					<TypeCard activity={item} timeType={selectedTime} />
				</div>
			))}
		</div>
	);
};

export { Dashboard };
