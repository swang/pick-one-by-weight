const tap = require('tap')
const test = tap.test
const pickOneByWeight = require('../index.js')

test('errors out when values are non-numbers', (t) => {
  let p = { a: "hello", b: 3 }
  t.throws(function() { pickOneByWeight(p) })
  t.end()
})

test('returns a:20%, b:30%, c:50% of the time', (t) => {
  let p = { a: 2, b: 3, c: 5 }
  let r = { a: 0, b: 0, c: 0 }
  for (let i = 0; i < 10000; i++) {
    let t = pickOneByWeight(p)
    r[t]++
  }
  // X/10000*100 => X/100
  t.ok(Math.abs(r['a'] - 2000)/100 <= 1.5, 'a is slightly off')
  t.ok(Math.abs(r['b'] - 3000)/100 <= 1.5, 'b is slightly off')
  t.ok(Math.abs(r['c'] - 5000)/100 <= 1.5, 'c is slightly off')
  t.end()
})
