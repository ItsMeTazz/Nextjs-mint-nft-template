import { nftContract } from 'contracts/nftContract/nftContract';
import { useAccount, useContractRead, useNetwork } from 'wagmi';

export default function useUserNFTs() {
  const { chain } = useNetwork();
  const { address } = useAccount();

  const { data, isLoading } = useContractRead({
    address: nftContract[chain?.id]?.address,
    abi: nftContract[chain?.id]?.abi,
    functionName: `balanceOf`,
    args: [address],
    watch: false,
  });

  return { userNFTs: Number(data), isLoading };
}
