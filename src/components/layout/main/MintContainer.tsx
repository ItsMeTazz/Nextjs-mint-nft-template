import Image from 'next/image';
import { useMemo, useState } from 'react';
import { FaMinusSquare } from 'react-icons/fa';
import { FaPlusSquare } from 'react-icons/fa';
import { GiReceiveMoney } from 'react-icons/gi';
import { useAccount } from 'wagmi';

import useMaxSupply from '@/hooks/useMaxSupply';
import useMint from '@/hooks/useMint';
import usePrice from '@/hooks/usePrice';
import useSupply from '@/hooks/useSupply';
import useUserNFTs from '@/hooks/useUserNFTs';

import AnimatedButton from '@/components/buttons/AnimatedButton';
import ConnectButton from '@/components/buttons/ConnectButton';
import LoadingSpinner from '@/components/layout/main/LoadingSpinner';

import Nft from '@/assets/img/nft.jpg';

export function MintContainer() {
  const [quantity, setQuantity] = useState(1);

  const { address } = useAccount();
  const { price } = usePrice();
  const { supply } = useSupply();
  const { maxSupply } = useMaxSupply();
  const { preparation, transaction, confirmation } = useMint(quantity, price);
  const { userNFTs } = useUserNFTs();

  const totalCost = useMemo(
    () => (price ? (Number(price) * quantity).toFixed(1) : null),
    [price, quantity]
  );

  const mint = () => {
    if (transaction.write) {
      transaction.write();
    }
  };

  const isMinting = () => {
    if (confirmation.isLoading) {
      return true;
    }
    return false;
  };

  const getButtonTitle = () => {
    if (transaction.isLoading === true) {
      return 'Confirm ...';
    }
    if (confirmation.isLoading) {
      return 'Minting ...';
    }
    return 'Mint';
  };

  return (
    <div className=''>
      <div className='flex justify-center'>
        <div className='w-[80%] rotate-0 rounded-t-3xl rounded-b-lg border-[1px] border-slate-100/20 bg-white/10 px-3 py-3 uppercase text-white shadow-2xl transition-all hover:bg-white/20 md:w-[300px] md:rotate-2'>
          <div className='py-1 px-1'>
            <div className='relative h-full'>
              <Image
                className='rounded-t-2xl rounded-b-md'
                src={Nft}
                alt='Nft'
                objectFit='fill'
              />

              {address && (
                <>
                  <div className='mt-2'>
                    <div className='flex justify-between'>
                      <div className=''>Your NFTs</div>
                      <div className='font-bold'>{userNFTs ? userNFTs : 0}</div>
                    </div>
                    <div className='flex justify-between'>
                      <div className=''>Price</div>
                      <div className='font-bold'>
                        {totalCost ? totalCost : 0} AVAX
                      </div>
                    </div>
                    <div className='flex justify-between'>
                      <div className=''>Remaining Supply</div>
                      <div className='font-bold'>
                        {`${supply ? supply : 0} / ${
                          maxSupply ? maxSupply : 0
                        }`}
                      </div>
                    </div>

                    <div className='flex select-none items-center justify-between '>
                      <div className=''>Quantity</div>
                      <div className='flex items-center gap-4'>
                        <button
                          disabled={isMinting() || quantity == 1}
                          onClick={() => {
                            setQuantity((prevQ) => prevQ - 1);
                          }}
                        >
                          <FaMinusSquare />
                        </button>
                        <div className='select-none font-bold'>
                          {quantity} / 5
                        </div>
                        <button
                          disabled={isMinting() || quantity === 5}
                          onClick={() => {
                            setQuantity((prevQ) => prevQ + 1);
                          }}
                        >
                          <FaPlusSquare />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className='mt-3 select-none'>
                    <AnimatedButton
                      disabled={preparation.isError}
                      title={getButtonTitle()}
                      backgroundColor='bg-blue-500'
                      icon={
                        isMinting() ? (
                          <LoadingSpinner />
                        ) : (
                          <GiReceiveMoney
                            color='white'
                            className='mt-[-3px] mr-2 inline-block'
                          />
                        )
                      }
                      onClick={mint}
                    />
                  </div>
                </>
              )}
              {!address && <ConnectButton />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
