export type InputField = {
  labelText: string,
  inputId: string,
  pattern: string,
  placeholder?: string,
  disabled?: boolean
}

export const Binary: InputField = {
  labelText: "Binary:",
  inputId: "binary",
  placeholder: "e.g. 0101001",
  disabled: false,
  pattern: "^[01]+$"
}

export const Decimal: InputField = {
  labelText: "Decimal:",
  inputId: "decimal",
  placeholder: "e.g. 524",
  disabled: false,
  pattern: "^[1-9][0-9]*$"
}