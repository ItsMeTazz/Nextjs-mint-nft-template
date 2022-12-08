import { nftContract } from 'contracts/nftContract/nftContract';
import { BigNumber } from 'ethers';
import { useContractWrite, useNetwork, usePrepareContractWrite } from 'wagmi';
import { useWaitForTransaction } from 'wagmi';

import { TransactionStatus } from '@/constant/types';
import { useToast } from '@/contexts/ToastContext';

export default function useMint(count, price) {
  const toastContext = useToast();
  const { chain } = useNetwork();

  const preparation = usePrepareContractWrite({
    address: nftContract[chain?.id]?.address,
    abi: nftContract[chain?.id]?.abi,
    functionName: 'Mint',
    args: [count],
    overrides: {
      value:
        price && count ? BigNumber.from((price * 1e18 * count).toString()) : 0,
    },
    onError(error) {
      console.error(error);
    },
  });

  const transaction = useContractWrite(preparation.config);
  const confirmation = useWaitForTransaction({
    confirmations: 1,
    hash: transaction.data?.hash,
    onSuccess() {
      toastContext.showToast(
        TransactionStatus.Success,
        `Successfully minted ${count} NFTs`,
        transaction.data.hash
      );
    },
    onError(error) {
      console.error(error);
      toastContext.showToast(
        TransactionStatus.Failed,
        `Failed to mint ${count} NFTs`,
        transaction.data.hash
      );
    },
    onSettled(data, error) {
      console.log('confirmation Settled', { data, error });
    },
  });

  return {
    transaction,
    confirmation,
    preparation,
  };
}
