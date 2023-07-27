"use client";

import { InputField } from "@/types";

type Props = {
  converterType: InputField;
}

export default function InputField(
 {converterType}: Props
) {
  const {labelText, placeholder, disabled, inputId } = converterType;
  const placeholderText = (!disabled && placeholder) ? placeholder : "";

  return(
    <>
      <label htmlFor={inputId} className='self-start'>{labelText} </label>
      <input 
        type="text" 
        name={inputId} 
        id={inputId} 
        placeholder={placeholderText} 
        disabled={disabled}
        />
    </>
  )
}