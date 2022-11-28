import { nftContract } from 'contracts/nftContract/nftContract';
import { useContractRead, useNetwork } from 'wagmi';

import { BigNumberToLocalString } from '@/lib/numberToLocalString';

export default function usePrice() {
  const { chain } = useNetwork();

  const { data, isLoading } = useContractRead({
    address: nftContract[chain?.id]?.address,
    abi: nftContract[chain?.id]?.abi,
    functionName: `cost`,
    watch: false,
    select: (data) => BigNumberToLocalString(data, 1),
  });

  return { price: data, isLoading };
}
