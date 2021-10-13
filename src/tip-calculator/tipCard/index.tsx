import { FC, useState, useMemo } from 'react';
import './index.css';

const TipCard: FC = () => {
	const [bill, setBill] = useState<number>(0);
	const [percent, setPercent] = useState<number>(0);
	const [peopleNum, setPeopleNum] = useState<number>(0);

	const tipAmount = useMemo(
		() => (peopleNum ? (bill * percent) / 100 / peopleNum : 0).toFixed(2),
		[bill, percent, peopleNum]
	);
	const totalAmount = useMemo(
		() =>
			(peopleNum ? (bill + (bill * percent) / 100) / peopleNum : 0).toFixed(2),
		[bill, percent, peopleNum]
	);

	const [percentMap, setPercentMap] = useState(
		[5, 10, 15, 25, 50].reduce(
			(map, el) => map.set(el, false),
			new Map<number, boolean>()
		)
	);

	const onReset = () => {
		setBill(0);
		setPercent(0);
		setPeopleNum(0);
	};

	const [focusState, setFocusState] = useState(
		new Array<boolean>(3).fill(false)
	);

	const [warning, setWarning] = useState<boolean>(null!);

	return (
		<div className='card bg-white radius'>
			<div className='card-item card-item-left'>
				<div className='card-item-sub'>
					<div className='dark-3'>Bill</div>
					<div
						className={`input-container bg-light-1 ${
							focusState[0] ? ' focus' : ''
						}
            `}
					>
						<div className='icon-dollar' />
						<input
							className='input-custom bg-light-1 font-l dark-3 weight'
							placeholder='0'
							value={bill}
							onChange={(event) => {
								const num = parseInt(event.target.value || '0');
								!isNaN(num) && setBill(num);
							}}
							onFocus={() => {
								setFocusState([true, false, false]);
							}}
							onBlur={() => {
								setFocusState([false, false, false]);
							}}
						/>
					</div>
				</div>

				<div className='card-item-sub'>
					<div className='dark-3'>Select Tip %</div>
					<div className='percent-container'>
						{[...percentMap].map((percent, index) => {
							return (
								<div
									key={index}
									className={`${
										percent[1] ? 'active' : ''
									} percent-item bg-dark font-l white flex justify-center`}
									onClick={() => {
										setPercent(percent[0]);
										setPercentMap((preMap) => {
											return [...preMap].reduce(
												(map, el, i) => map.set(el[0], index === i),
												new Map<number, boolean>()
											);
										});
									}}
								>
									{percent[0]}%
								</div>
							);
						})}
						<div
							className={`percent-item bg-light-1 font-l white flex justify-center ${
								focusState[1] ? 'focus' : ''
							}`}
						>
							<input
								className='input-custom bg-light-1 font-l dark-3 weight'
								style={{ width: '90px' }}
								type='text'
								placeholder='Custom'
								onChange={(event) => {
									const num = parseInt(event.target.value || '0');
									!isNaN(num) && setPercent(num);

									setPercentMap((preMap) => {
										return [...preMap].reduce(
											(map, el, i) => map.set(el[0], false),
											new Map<number, boolean>()
										);
									});
								}}
								onFocus={() => {
									setFocusState([false, true, false]);
								}}
								onBlur={() => {
									setFocusState([false, false, false]);
								}}
							/>
						</div>
					</div>
				</div>

				<div className='card-item-sub'>
					<div className='flex justify-between'>
						<div className='dark-3'>Number of People</div>
						{warning && <div className='red'>Can't be zero</div>}
					</div>
					<div
						className={`input-container bg-light-1 ${
							focusState[2] ? 'focus' : ''
						} ${warning ? 'warning' : ''}`}
					>
						<div className='icon-people' />
						<input
							className='input-custom bg-light-1 font-l dark-3 weight'
							placeholder='0'
							value={peopleNum}
							onChange={(event) => {
								const num = parseInt(event.target.value || '0');
								!isNaN(num) && setPeopleNum(num);
								if (event.target.value === '0') {
									setWarning(true);
								} else {
									setWarning(false);
								}
							}}
							onFocus={() => {
								setFocusState([false, false, true]);
							}}
							onBlur={() => {
								setFocusState([false, false, false]);
							}}
						/>
					</div>
				</div>
			</div>
			<div className='card-item card-item-right-wrap'>
				<div className='card-item-right bg-dark radius'>
					<div>
						<div className='result-container'>
							<div>
								<div className='white font-m weight'>Tip Amount</div>
								<div className='dark-1 font-s'>/ person</div>
							</div>
							<div className='result-num color-strong font-xl weight-heavy'>
								${tipAmount}
							</div>
						</div>
						<div className='result-container'>
							<div>
								<div className='white font-m weight'>Total</div>
								<div className='dark-1 font-s'>/ person</div>
							</div>
							<div className='result-num color-strong font-xl weight-heavy'>
								${totalAmount}
							</div>
						</div>
					</div>
					<div
						className='btn-reset bg-strong dark-3 font-m weight'
						onClick={() => onReset()}
					>
						RESET
					</div>
				</div>
			</div>
		</div>
	);
};

export { TipCard };
