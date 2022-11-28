import ConnectButton from '@/components/buttons/ConnectButton';
import Logo from '@/components/layout/Menu/Logo';
import MenuItems from '@/components/layout/Menu/MenuItems';

export default function Menu() {
  return (
    <div className='w-full'>
      <div className='py-5'>
        <div className='h-16'>
          <div className='h-full'>
            <div className='flex h-full flex-row items-center justify-between'>
              <div className='flex items-center gap-4 align-middle text-primary-50'>
                <Logo />
              </div>
              <div className='flex items-center gap-4 align-middle text-primary-50'>
                <MenuItems />
                <ConnectButton />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
