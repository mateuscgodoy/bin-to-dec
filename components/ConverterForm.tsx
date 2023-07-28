"use client";

import { HiSwitchVertical } from 'react-icons/hi';
import { ChangeEventHandler, FormEventHandler, MouseEventHandler, useState } from 'react';

import { Binary, Decimal } from '@/types';
import { binaryToDecimal, decimalToBinary } from '@/utils/converter';
import InputField from '@/components/InputField';
import useSwitchMode from '@/hooks/useSwitchMode';

export default function ConverterForm() {
  const [binToDec, setBinToDec] = useState(true);
  const [binValue, setBinValue] = useState("");
  const [decValue, setDecValue] = useState("");

  Binary.disabled = !binToDec;
  Decimal.disabled = binToDec;

  // useSwitchMode(binToDec);

  const handleBinChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setBinValue(e.target.value);
  }

  const handleDecChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setDecValue(e.target.value);
  }

  const handleSwitchMode: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();

    setBinToDec(prev => !prev);
    setDecValue("");
    setBinValue("");
    Binary.disabled = !binToDec;
    Decimal.disabled = binToDec;
  }

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    console.log('Success!');
    if(binToDec) {
      setDecValue(binaryToDecimal(binValue).toString());
    } else {
      setBinValue(decimalToBinary(decValue).toString());
    }
  }
  
  return (
    <form action="" className="flex flex-col items-center" onSubmit={handleSubmit}>
      <div className={`${binToDec ? "order-first" : "order-3"} flex flex-col`}>
        <InputField converterType={Binary} value={binValue} onChange={handleBinChange} />
      </div>
      
      
      <button className='bg-lime-500 font-semibold p-2 rounded-md 
      hover:bg-lime-400 my-4 order-2 text-black transition duration-500 hover:scale-105'
        onClick={handleSwitchMode}
      >
        <HiSwitchVertical size={20}  />
      </button>
      
      
      <div className={`${!binToDec ? "order-first" : "order-3"} flex flex-col`}>
        <InputField converterType={Decimal} value={decValue} onChange={handleDecChange}/>
      </div>
      
        <button 
          type="submit" 
          className="w-[250px] bg-lime-500 font-semibold py-2 rounded-md 
          hover:bg-lime-400 mt-5 order-last text-black text-lg 
          transition duration-500 hover:scale-105"
        >
          Convert
        </button>
      
    </form>
  )
}