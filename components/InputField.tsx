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
      <label htmlFor={inputId} className='self-start'>{labelText} </label>
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
        />
    </>
  )
}