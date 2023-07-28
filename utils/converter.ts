export function binaryToDecimal(input: string) {
  let output = 0;
  for (let i = 0; i < input.length; i++) {
    if(input[input.length - 1 - i] === '1') {
      output += Math.pow(2, i);
    }
  }
  return output;
}

export function decimalToBinary(input: string, startingIndex: number = 10) {
  let numberInput = Number(input);
  if (Math.pow(2, startingIndex - 1) < numberInput) return decimalToBinary(input, startingIndex + 5);

  let sum = 0;
  let output = "";
  for (let i = startingIndex - 1; i >= 0; i--) {
    const powerOfTwo = Math.pow(2, i);

    if (powerOfTwo <= numberInput - sum) {
      sum += powerOfTwo;
      output += "1";
    } else {
      if (output.length > 0) output += "0";
    }
  }
  return output;
}