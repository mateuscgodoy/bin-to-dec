export type InputField = {
  labelText: string,
  inputId: string,
  placeholder?: string,
  disabled?: boolean,
}

export const Binary: InputField = {
  labelText: "Binary:",
  inputId: "binary",
  placeholder: "Enter binary number here",
  disabled: false
}

export const Decimal: InputField = {
  labelText: "Decimal:",
  inputId: "decimal",
  placeholder: "Enter decimal number here",
  disabled: false
}