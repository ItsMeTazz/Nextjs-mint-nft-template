import * as React from 'react';

import useRendered from '@/hooks/useRendered';

import Footer from '@/components/layout/Footer';
import Menu from '@/components/layout/Menu/Menu';
import Seo from '@/components/Seo';

export default function Layout({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const rendered = useRendered();

  return (
    <>
      {rendered && (
        <>
          <Seo templateTitle={title} />
          <div className='linear-gradient relative min-h-screen px-5 pb-32 md:px-12 lg:px-20'>
            <Menu />
            <div>{children}</div>
            <Footer />
          </div>
        </>
      )}
    </>
  );
}
