import { nftContract } from 'contracts/nftContract/nftContract';
import { useContractRead, useNetwork } from 'wagmi';

export default function useMaxSupply() {
  const { chain } = useNetwork();

  const { data, isLoading } = useContractRead({
    address: nftContract[chain?.id]?.address,
    abi: nftContract[chain?.id]?.abi,
    functionName: `supplyLimit`,
    watch: false,
    select: (data) => Number(data),
  });

  return { maxSupply: data, isLoading };
}
