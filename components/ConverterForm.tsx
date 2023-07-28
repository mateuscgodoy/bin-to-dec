"use client";

import { HiSwitchVertical } from 'react-icons/hi';
import { FormEventHandler, MouseEventHandler, useState } from 'react';

import { Binary, Decimal } from '@/types';
import InputField from '@/components/InputField';
import useSwitchMode from '@/hooks/useSwitchMode';

export default function ConverterForm() {
  const [binToDec, setBinToDec] = useState(true);

  Binary.disabled = !binToDec;
  Decimal.disabled = binToDec;

  useSwitchMode(binToDec);

  const handleSwitchMode: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();

    setBinToDec(prev => !prev);
  }

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    console.log('Success!');
  }
  
  return (
    <form action="" className="flex flex-col items-center" onSubmit={handleSubmit}>
      <div className={`${binToDec ? "order-first" : "order-3"} flex flex-col`}>
        <InputField converterType={Binary} />
      </div>
      
      
      <button className='bg-lime-500 font-semibold p-2 rounded-md 
      hover:bg-lime-400 my-4 order-2'
        onClick={handleSwitchMode}
      >
        <HiSwitchVertical />
      </button>
      
      
      <div className={`${!binToDec ? "order-first" : "order-3"} flex flex-col`}>
        <InputField converterType={Decimal} />
      </div>
      
        <button 
          type="submit" 
          className="w-[250px] bg-lime-500 font-semibold py-2 rounded-md 
          hover:bg-lime-400 mt-5 order-last"
        >
          Convert
        </button>
      
    </form>
  )
}