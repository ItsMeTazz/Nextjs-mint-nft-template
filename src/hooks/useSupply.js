import { nftContract } from 'contracts/nftContract/nftContract';
import { useContractRead, useNetwork } from 'wagmi';

export default function useSupply() {
  const { chain } = useNetwork();

  const { data, isLoading } = useContractRead({
    address: nftContract[chain?.id]?.address,
    abi: nftContract[chain?.id]?.abi,
    functionName: `totalSupply`,
    watch: true,
    select: (data) => Number(data),
  });

  return { supply: data, isLoading };
}
