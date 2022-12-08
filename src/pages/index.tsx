import * as React from 'react';

import Layout from '@/components/layout/Layout';
import { Hero } from '@/components/layout/main/Hero';
import { MintContainer } from '@/components/layout/main/MintContainer';

export default function HomePage() {
  return (
    <Layout title='Home'>
      <main>
        <section className='text-white'>
          <div className='mt-10 grid grid-cols-1 items-start justify-between gap-12 md:grid-cols-2 md:gap-0'>
            <Hero />
            <MintContainer />
          </div>
        </section>
      </main>
    </Layout>
  );
}
