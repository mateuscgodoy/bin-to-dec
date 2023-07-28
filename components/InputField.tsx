"use client";

import { InputField } from "@/types";
import { ChangeEventHandler } from "react";

type Props = {
  converterType: InputField;
  value: string,
  onChange: ChangeEventHandler<HTMLInputElement>
}

export default function InputField(
 {converterType, onChange, value}: Props
) {
  const {labelText, placeholder, disabled, inputId, pattern } = converterType;
  const placeholderText = (!disabled && placeholder) ? placeholder : "";

  return(
    <>
      <label htmlFor={inputId} className='self-start mb-1'>{labelText} </label>
      <input 
        type="text" 
        name={inputId} 
        id={inputId} 
        placeholder={placeholderText} 
        disabled={disabled}
        required={!disabled}
        pattern={pattern}
        onChange={onChange}
        value={value}
        className={`p-2 bg-neutral-200 ${!disabled ? 
          "transition duration-1000 focus:bg-neutral-300 dark:focus:bg-neutral-900" : "cursor-not-allowed"} 
        rounded-md font-semibold text-lg focus:outline-none focus:ring focus:ring-lime-500 dark:bg-neutral-800`}
        />
    </>
  )
}