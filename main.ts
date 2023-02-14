export {}

//* IF NUM / 3 => FIZZ
//* IF NUM / 5 => BUZZ
//* IF (NUM / 3) AND (NUM / 5) => FIZZBUZZ

const main = () => {
  for (let i = 0; i <= 100; i++) {
    if (isDiv3(i) && isDiv5(i)) {
      console.log(`${i} => FIZZBUZZ`)
    } else if (isDiv3(i)) {
      console.log(`${i} => FIZZ`)
    } else if (isDiv5(i)) {
      console.log(`${i} => BUZZ`)
    } else {
      console.log(`${i}`)
    }
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

main()
