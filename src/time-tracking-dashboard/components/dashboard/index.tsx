import { FC } from 'react';
import styles from './index.module.scss';

type DashboardProps = {
	data: {
		title: string;
		timeframes: {
			[key in 'daily' | 'weekly' | 'monthly']: {
				current: number;
				previous: number;
			};
		};
	}[];
};

const Dashboard: FC<DashboardProps> = ({ data }) => {
	console.log('data: ', data);

	return <div className={styles.container}></div>;
};

export { Dashboard };
