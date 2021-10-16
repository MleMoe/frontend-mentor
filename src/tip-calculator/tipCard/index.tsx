import React, { FC, useState, useMemo, useEffect } from 'react';
import './index.css';

// 有一些需求姐妹可以考虑实现一下~ （具体的展示gif在语雀文档）
// 1. bill 应该是可以有小数点的
// 2. 自定义的 tip 应该是不能为负数的（现在是可以为负数和0的）
// 3. 目前的 input 控件在点击后，锚点定位在 0 之前，如果直接输会是金额的 10 倍，需要控制鼠标到 0 后才会是正确的

const NoneState = [false, false, false]
const BillState = [true, false, false]
const PercentState = [false, true, false]
const PeopleNumState = [false, false, true]

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

	// const [focusState, setFocusState] = useState(
	// 	new Array<boolean>(3).fill(false)
	// );
	// RECOMMEND 因为 focus state 目前是有限种情况，我觉得用常量会在可读性上更强。
	const [focusState, setFocusState] = useState(NoneState)
	const setNoneState = () => setFocusState(NoneState)

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
								setFocusState(BillState);
							}}
							onBlur={setNoneState}
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
									setFocusState(PercentState);
								}}
								onBlur={setNoneState}
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
								setFocusState(PeopleNumState);
							}}
							onBlur={setNoneState}
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
