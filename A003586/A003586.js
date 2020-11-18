const QJS = require('../qjs')
const qjs = new QJS()

const f = (num) => {
  while (num !== 1) {
    if (num % 2 === 0) num = num / 2
    else if (num % 3 === 0) num = num / 3
    else return false
  }
  return true
}

const g = (num) => {
  let a = 0
  let b = 0
  while (num !== 1) {
    if (num % 2 === 0) {
      num = num / 2
      a++
    }
    else if (num % 3 === 0) {
      num = num / 3
      b++
    }
    else return false
  }
  return `${2 ** a * 3 ** b} = 2^${a} * 3^${b}`
}
console.log(qjs.iota(1, 100).filter(elem => f(elem)))
console.log(qjs.iota(1, 100).map(elem => g(elem)).filter(e => e !== false))
