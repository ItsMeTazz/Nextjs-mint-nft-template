import { ConnectKitButton } from 'connectkit';
import { SlWallet } from 'react-icons/sl';

import AnimatedButton from '@/components/buttons/AnimatedButton';

export function ConnectButton() {
  return (
    <ConnectKitButton.Custom>
      {({ isConnected, show, address, unsupported }) => {
        return (
          <>
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
                <SlWallet
                  color='white'
                  className='mt-[-3px] mr-2 hidden md:inline-block'
                />
              }
              onClick={show}
            />
          </>
        );
      }}
    </ConnectKitButton.Custom>
  );
}

export default ConnectButton;
