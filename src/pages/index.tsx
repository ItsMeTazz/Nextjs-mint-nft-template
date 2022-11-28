import * as React from 'react';

import Dashboard from '@/components/Dashboard';
import { Hero } from '@/components/Hero';
import Layout from '@/components/layout/Layout';
import { MintContainer } from '@/components/MintContainer';

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
        <section className='text-white'>
          <Dashboard />
        </section>
      </main>
    </Layout>
  );
}
