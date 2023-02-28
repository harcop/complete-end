import test from 'ava';
import completeString from '../src/index';

test('should append the desired ending if it is not already present', t => {
  const inputString = 'https://url.com'
  const end = '/api/v4'
  const expected = 'https://url.com/api/v4'
  t.is(completeString(inputString, end), expected)
})

test('should append the remaining characters of the desired ending if it partially matches the end of the input string', t => {
  const inputString = 'https://url.com/api'
  const end = '/api/v4'
  const expected = 'https://url.com/api/v4'
  t.is(completeString(inputString, end), expected)
})

test('should not modify the input string if the desired ending is already present', t => {
  const inputString = 'https://url.com/api/v4'
  const end = '/api/v4'
  const expected = 'https://url.com/api/v4'
  t.is(completeString(inputString, end), expected)
})

test('should handle edge cases where the desired ending is longer than the input string', t => {
  const inputString = 'https://url.com/api/v4'
  const end = '/api/v4/another-endpoint-url'
  const expected = 'https://url.com/api/v4/another-endpoint-url'
  t.is(completeString(inputString, end), expected)
})

test("should handle edge cases where the desired ending is an empty string", (t) => {
  const inputString = "Hello world";
  const desiredEnding = "";

  t.is(completeString(inputString, desiredEnding), "Hello world");
});

test("should handle edge cases where the input string is an empty string", (t) => {
  const inputString = "";
  const desiredEnding = "Hello";

  t.is(completeString(inputString, desiredEnding), "Hello");
});
