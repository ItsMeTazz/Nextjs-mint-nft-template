import { GiPayMoney, GiTakeMyMoney } from 'react-icons/gi';

import useUserNFTs from '@/hooks/useUserNFTs';

import AnimatedButton from '@/components/buttons/AnimatedButton';

export default function Dashboard() {
  const { userNFTs } = useUserNFTs();

  const canCompound = true;

  const claim = () => {
    console.log('claiming ');
  };

  const compound = () => {
    console.log('compound ');
  };

  return userNFTs && Number(userNFTs) > 0 ? (
    <>
      <div className='mt-40'>
        <div className='text-white-500 text-xl'>Your Statistics</div>
        <div className='mt-2 flex items-start justify-between align-top'>
          <div className='rounded-lg border-[1px] border-slate-100/20 bg-white/10 shadow-lg transition-all hover:bg-white/20'>
            <div className='p-3'>
              <div className='animated-underline text-xl'>Your NFTs</div>
              <div className='text-xl font-bold'>{userNFTs}</div>
            </div>
          </div>
          <div className='rounded-lg border-[1px] border-slate-100/20 bg-white/10 shadow-lg transition-all hover:bg-white/20'>
            <div className='p-3'>
              <div className='animated-underline text-xl'>
                Revenue claimable
              </div>
              <div className='text-xl font-bold'>$1,221</div>
            </div>
          </div>
          <div className='rounded-lg border-[1px] border-slate-100/20 bg-white/10 shadow-lg transition-all hover:bg-white/20'>
            <div className='p-3'>
              <div className='animated-underline text-xl'>
                Total Revenue Earned
              </div>
              <div className='text-xl font-bold'>$291,842</div>
            </div>
          </div>
        </div>
      </div>
      <div className='mt-2 flex gap-4'>
        <div>
          <AnimatedButton
            title='Claim'
            backgroundColor='bg-white/10'
            icon={
              <GiTakeMyMoney
                color='white'
                className='mt-[-3px] mr-2 inline-block'
              />
            }
            onClick={claim}
          />
        </div>
        <div>
          <AnimatedButton
            disabled={!canCompound}
            title='Compound'
            backgroundColor='bg-blue-500'
            icon={
              <GiPayMoney
                color='white'
                className='mt-[-3px] mr-2 inline-block'
              />
            }
            onClick={compound}
          />
        </div>
      </div>
    </>
  ) : null;
}
