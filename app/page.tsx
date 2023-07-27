import { HiSwitchVertical } from 'react-icons/hi';

import { Binary, Decimal } from '@/types';
import InputField from '@/components/InputField';

export default function Home() {
  return (
    <main>
      <article className="sm:w-1/2 w-2/3 mx-auto flex flex-col items-center ">
        <section className="mt-20 mb-10 text-center">
          <h1 className="text-4xl font-bold">
            Binary to Decimal Converter
          </h1>
          <p className="text-lg text-neutral-600">
            Your trustworthy converter for binary numbers.
          </p>
        </section>
        <section>
          <div className="border-4 border-lime-500 rounded-md p-12 bg-neutral-100 shadow-md text-center">
            <h2 className="text-2xl font-semibold mb-5">Binary to Decimal</h2>
            <form action="" className="flex flex-col items-center">
              <InputField converterType={Binary} />
              
              <button className='bg-lime-500 font-semibold p-2 rounded-md 
              hover:bg-lime-400 my-4'>
                <HiSwitchVertical />
              </button>
              
              <InputField converterType={Decimal} />
              <button 
                type="submit" 
                className="w-[250px] bg-lime-500 font-semibold py-2 rounded-md 
                hover:bg-lime-400 mt-5"
              >
                Convert
              </button>
            </form>
          </div>
        </section>
      </article>
    </main>
  );
}
