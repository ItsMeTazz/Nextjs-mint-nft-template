import Link from 'next/link';
import * as React from 'react';

export default function Logo() {
  return (
    <div className='cursor-pointer'>
      <Link href='/'>
        <div>
          <div className='flex'>
            <span className='text-3xl '>
              0x<span className='text-blue-500'>Tazz_</span>
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}
