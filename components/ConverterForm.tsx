"use client";

import { HiSwitchVertical } from 'react-icons/hi';
import { MouseEventHandler, useEffect, useState } from 'react';

import { Binary, Decimal } from '@/types';
import InputField from '@/components/InputField';
import useSwitchMode from '@/hooks/useSwitchMode';

export default function ConverterForm() {
  const [binToDec, setBinToDec] = useState(true);

  // This hook could be a simple hard coded initial value instead
  useEffect(() => {
    setBinToDec(prev => !prev);
  }, []);

  useSwitchMode(binToDec);

  const handleSwitchMode: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();

    setBinToDec(prev => !prev);
  }
  
  return (
    <form action="" className="flex flex-col items-center">
      <InputField converterType={Binary} />
      
      <button className='bg-lime-500 font-semibold p-2 rounded-md 
      hover:bg-lime-400 my-4'
        onClick={handleSwitchMode}
      >
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
  )
}