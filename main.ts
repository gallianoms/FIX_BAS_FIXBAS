export {}

//* IF NUM / 3 => FIX
//* IF NUM / 5 => BAS
//* IF (NUM / 3) AND (NUM / 5) => FIXBAS

const main = () => {
  for (let i = 0; i <= 100; i++) {
    if (isDiv3(i) && isDiv5(i)) {
      console.log(`${i} => FIXBAS`)
    } else if (isDiv3(i)) {
      console.log(`${i} => FIX`)
    } else if (isDiv5(i)) {
      console.log(`${i} => BAS`)
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
