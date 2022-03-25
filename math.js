const pi = 3.141592653589793
console.log(pi)

// 1. toFixed : 인수로 소수점 몇번째 자리까지 유지할지 지정해줌
  const str = pi.toFixed(2)   
  console.log(str)        // 3.14
  console.log(typeof str) // string


// 2. parseInt : 정수 
  const integer = parseInt(str) // 3


// 3. parseFloat : 소수점 유지하면서 문자데이터를 숫자로 변환 
  const float = parseFloat(str) // 3.14
  console.log(typeof integer, typeof float) // number, number


// 4. Math.
  console.log('abs: ', Math.abs(-12))         // abs : 12       절대값 반환
  console.log('min: ', Math.min(2, 8))        // min : 2        최소값 반환
  console.log('max: ', Math.max(2, 8))        // max : 8        최대값 반환
  console.log('ceil: ', Math.ceil(3.14))      // ceil : 4       올림
  console.log('floor: ', Math.floor(3.14))    // floor : 3      내림
  console.log('round: ', Math.round(3.14))    // round : 3      반올림
  console.log('random: ', Math.random())      // random : 0.03857289374598235??