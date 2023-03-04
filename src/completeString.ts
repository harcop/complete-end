export default function completeString(inputString: string, desiredEnding: string): string {
  if (!inputString.endsWith(desiredEnding)) {
    let lengthdiff = inputString.length - desiredEnding.length;
    
    // if the inputString length is > desireEnding length, tempString will cut out the length of the desireEnding from inputString else use the whole inputString length
    let tempString = lengthdiff > 0 ? inputString.slice(lengthdiff) : inputString;

    const initTempStringLength = tempString.length
    for(let i = 0; i<initTempStringLength; i++) {
      if(desiredEnding.startsWith(tempString)) {
        return inputString + desiredEnding.slice(tempString.length)
      }
      tempString = tempString.slice(1)
    }
    return inputString + desiredEnding
  }
  return inputString;
}


console.log(completeString('hpotpot', 'potpotpot'))
