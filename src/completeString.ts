export default function completeString(inputString: string, desiredEnding: string): string {
  if (!inputString.endsWith(desiredEnding)) {
    for(let i = 0; i<desiredEnding.length; i++) {
      let partialString = desiredEnding.slice(0, i+1)
      let partialStringRegex = new RegExp(`${partialString}$`)
      let matchPartialString = inputString.match(partialStringRegex)
      if(matchPartialString) {
        return inputString.replace(partialStringRegex, desiredEnding)
      }
    }
    return inputString + desiredEnding
  }
  return inputString;
}
