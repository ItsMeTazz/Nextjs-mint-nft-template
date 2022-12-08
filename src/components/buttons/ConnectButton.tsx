import { ConnectKitButton } from 'connectkit';
import { SlWallet } from 'react-icons/sl';

import AnimatedButton from '@/components/buttons/AnimatedButton';
import SwitchNetworkButton from '@/components/buttons/SwitchNetworkButton';

export function ConnectButton() {
  return (
    <ConnectKitButton.Custom>
      {({ isConnected, show, address, unsupported }) => {
        return (
          <>
            {unsupported ? (
              <SwitchNetworkButton />
            ) : (
              <AnimatedButton
                title={
                  unsupported
                    ? 'Wrong Network'
                    : isConnected
                    ? `${address?.slice(0, 4)}...${address?.slice(-3)}`
                    : `Connect`
                }
                backgroundColor={unsupported ? 'bg-amber-500' : 'bg-white/10'}
                icon={
                  <SlWallet color='white' className='hidden md:inline-block' />
                }
                onClick={show}
              />
            )}
          </>
        );
      }}
    </ConnectKitButton.Custom>
  );
}

export default ConnectButton;
