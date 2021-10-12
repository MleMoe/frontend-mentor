import { FC, useState, useMemo } from 'react';
import './index.css';

const TipCard: FC = () => {
  const [bill, setBill] = useState(0);
  const [percent, setPercent] = useState(0);
  const [peopleNum, setPeopleNum] = useState(0);

  const tipAmount = useMemo(
    () => (bill * percent) / 100 / peopleNum,
    [bill, percent, peopleNum]
  );
  const totalPerson = useMemo(
    () => (bill + bill * percent) / 100 / peopleNum,
    [bill, percent, peopleNum]
  );

  const percentList = [5, 10, 15, 25, 50];

  return (
    <div className='card bg-white radius'>
      <div className='card-item card-item-left'>
        <div className='card-item-sub'>
          <div>Bill</div>
          <div className='input-container bg-light-1'>
            <div className='icon-dollar' />
            <input className='input-custom bg-light-1 font-l' placeholder='0' />
          </div>
        </div>

        <div className='card-item-sub'>
          <div>Select Tip %</div>
          <div className='percent-container'>
            {percentList.map((percent, index) => {
              return (
                <div className='percent-item bg-dark font-l white flex justify-center'>
                  {percent}%
                </div>
              );
            })}
            <div className='percent-item bg-light-1 font-l white flex justify-center'>
              <input
                className='input-custom bg-light-1 font-l light-2'
                style={{ width: '90px' }}
                type='text'
                placeholder='Custom'
              />
            </div>
          </div>
        </div>

        <div className='card-item-sub'>
          <div>Number of People</div>
          <div className='input-container bg-light-1'>
            <div className='icon-people' />
            <input className='input-custom bg-light-1 font-l' placeholder='0' />
          </div>
        </div>
      </div>
      <div className='card-item card-item-right bg-dark radius'>
        <div>
          <div className='result-container'>
            <div>
              <div className='white font-m'>Tip Amount</div>
              <div className='dark-1 font-s'>/ person</div>
            </div>
            <div className='color-strong font-xl'>$0</div>
          </div>
          <div className='result-container'>
            <div>
              <div className='white font-m'>Total</div>
              <div className='dark-1 font-s'>/ person</div>
            </div>
            <div className='color-strong font-xl'>$0</div>
          </div>
        </div>
        <div className='btn-reset bg-strong'>RESET</div>
      </div>
    </div>
  );
};

export { TipCard };
