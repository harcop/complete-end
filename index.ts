export default function completeString(inputString: string, desiredEnding: string): string {
  if (!inputString.endsWith(desiredEnding)) {
    let rld = inputString;

    const rldLength = rld.length
    for(let i = 0; i<rldLength; i++) {
      if(desiredEnding.startsWith(rld)) {
        return inputString + desiredEnding.slice(rld.length)
      }
      rld = rld.slice(1)
    }
    return inputString + desiredEnding
  }
  return inputString;
}
