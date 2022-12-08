export function Hero() {
  return (
    <div className='drop-shadow-md'>
      <h1 className='text-6xl'>
        Mint <span className='text-blue-500'>NFT</span>
      </h1>
      <h2 className='text-xl uppercase'>Slogan can be written here</h2>

      <p className='mt-10 text-sm text-slate-50'>
        How does it work? Simple. You put your text here and your explain what
        you do and how good you do it. Always a good idea to have proof backed
        statements.
      </p>

      <div className='mt-10'>
        <div className='grid grid-cols-1 justify-between gap-5 align-top'>
          <div className='w-full rounded-lg border-[1px] border-slate-100/20 bg-white/10 shadow-lg transition-all hover:bg-white/20 xl:w-4/5'>
            <div className='flex items-center justify-between p-3'>
              <div className='animated-underline text-2xl'>TVL</div>
              <div className='text-3xl font-bold'>$1,021,221</div>
            </div>
          </div>
          <div className='w-full rounded-lg border-[1px] border-slate-100/20 bg-white/10 shadow-lg transition-all hover:bg-white/20 xl:w-4/5'>
            <div className='flex  items-center justify-between p-3'>
              <div className='animated-underline text-2xl'>
                Revenue this month
              </div>
              <div className='text-3xl font-bold'>$31,221</div>
            </div>
          </div>
          <div className='w-full rounded-lg border-[1px] border-slate-100/20 bg-white/10 shadow-lg transition-all hover:bg-white/20 xl:w-4/5'>
            <div className='flex items-center justify-between p-3 '>
              <div className='animated-underline text-2xl'>
                Total Past Revenue
              </div>
              <div className='text-3xl font-bold'>$291,842</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
