export {}

//* IF NUM / 3 => FIZZ
//* IF NUM / 5 => BUZZ
//* IF (NUM / 3) AND (NUM / 5) => FIZZBUZZ

const fizzbuzz = (num: number): string | number => {
  if (num === 0) {
    return 0
  }

  if (isDiv3(num) && isDiv5(num)) {
    return 'fizzbuzz'
  }
  if (isDiv3(num)) {
    return 'fizz'
  }
  if (isDiv5(num)) {
    return 'buzz'
  }

  return num
}

const print = () => {
  for (let i = 0; i <= 100; i++) {
    console.log(`${i}: ${fizzbuzz(i)}`)
  }
}

const isDiv3 = (num: number) => {
  const arr: number[] = []

  while (num > 0) {
    arr.push(num % 10)
    num = Math.floor(num / 10)
  }

  const sum = arr.reduce((acc, val) => acc + val, 0)

  if (sum % 3 === 0) {
    return true
  }

  return false
}

const isDiv5 = (num: number) => {
  if (num % 10 === 0 || num % 10 === 5) {
    return true
  }
  return false
}

print()

module.exports = fizzbuzz
