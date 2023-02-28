import test from 'ava';
import completeString from './index';

test('complete a string with desire ending', t => {
  const url = 'https://url.com'
  const end = '/api/v4'
  const expected = 'https://url.com/api/v4'
  t.is(completeString(url, end), expected)
})

test('complete a string with partial end', t => {
  const url = 'https://url.com/api'
  const end = '/api/v4'
  const expected = 'https://url.com/api/v4'
  t.is(completeString(url, end), expected)
})

test('complete a string with a missing end', t => {
  const url = 'https://url.com/api/v'
  const end = '/api/v4'
  const expected = 'https://url.com/api/v4'
  t.is(completeString(url, end), expected)
})

test('do nothing when the string has the same ending', t => {
  const url = 'https://url.com/api/v4'
  const end = '/api/v4'
  const expected = 'https://url.com/api/v4'
  t.is(completeString(url, end), expected)
})

test('complete a string with a lengthy end', t => {
  const url = 'https://url.com/api/v4'
  const end = '/api/v4/another-endpoint-url'
  const expected = 'https://url.com/api/v4/another-endpoint-url'
  t.is(completeString(url, end), expected)
})
