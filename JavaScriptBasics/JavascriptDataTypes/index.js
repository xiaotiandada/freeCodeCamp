// boolean

var data = true

if(data){
  console.log('true')
}else{
  console.log('false')
}

// null

var n = null
console.log(n * 32)
// undefined

var a
console.log(a + 2)

// Number
var num = 3.6
var ber = 6.4
console.log(num + ber)

// String

var name = 'java'
console.log(name)
// Symbol

var sym1 = Symbol('java')
var sym2 = Symbol('java')
console.log(sym1 === sym2)
console.log(String(sym1) === String(sym2))

// Object

var myCar = new Object()
myCar.make = 'java'
myCar.model = 'script'
console.log(myCar.make)

// "true"
// 0
// NaN
// 10
// "java"
// false
// true
// "java"