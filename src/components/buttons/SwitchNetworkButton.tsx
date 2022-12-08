import { useSwitchNetwork } from 'wagmi';

import AnimatedButton from '@/components/buttons/AnimatedButton';

import AvaxLogo from '@/assets/img/avalanche-avax-logo.svg';

export default function SwitchNetworkButton() {
  const { switchNetwork } = useSwitchNetwork();

  return (
    <div className='animate-bounce'>
      <AnimatedButton
        backgroundColor='bg-stone-800/50'
        title='Switch Network'
        icon={<AvaxLogo />}
        onClick={() => {
          if (switchNetwork) {
            switchNetwork(43113);
          }
        }}
      />
    </div>
  );
}
