const fizzbuzz = require('./main')

describe('main', () => {
  test('should print fizz if they receive a multiple of 3', () => {
    const expected = 'fizz'
    const result = fizzbuzz(12)
    expect(expected).toBe(result)
  })

  test('should print buzz if they receive a multiple of 5', () => {
    const expected = 'buzz'
    const result = fizzbuzz(10)
    expect(expected).toBe(result)
  })

  test('should print fizzbuzz if they receive a multiple of 3 and 5', () => {
    const expected = 'fizzbuzz'
    const result = fizzbuzz(15)
    expect(expected).toBe(result)
  })
})
