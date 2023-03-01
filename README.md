# Complete String

The completeString function is a JavaScript function that ensures a given string ends with a desired ending. If the string already ends with the desired ending, the function returns the original string. Otherwise, the function adds the missing characters to the end of the string.

```ts
const result = completeString(inputString, desiredEnding);
```

The completeString function takes two arguments:

inputString (string): The input string to be checked.
desiredEnding (string): The desired ending that the input string should have.
The function returns the original string with the desired ending appended, if necessary.

```ts
console.log(completeString("https://url.com", "/api/v4")); // output: https://url.com/api/v4

console.log(completeString("https://url.com/api", "/api/v4")); // output: https://url.com/api/v4

console.log(completeString("https://url.com/api/v4", "/api/v4")); // output: https://url.com/api/v4
```

## test

```
$ npm test
```
