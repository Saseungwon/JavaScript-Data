// 1. indexOf() : 일치하는 첫 번째 인덱스를 반환, 일치하는 값이 없으면 -1 반환
  const result = 'Hello world'.indexOf('world')   // new String 으로 쓰지 않아도 리터럴 방식으로 사용가능
  console.log(result) // 6 

  const str = 'Hello world'
  console.log(str.indexOf('world'))       // 6
  console.log(str.indexOf('SSW'))         // -1 
  console.log(str.indexOf('SSW') !== -1)  // false



// 2. length
  const str = '0123'
  console.log(str) // 0123
  console.log(str.length) // 4



// 3. slice : 문자열의 일부를 추출하면서 새로운 문자를 반환한다. (beginIndex, endIndex(직전까지 추출))
  const str = 'Hello world'
  console.log(str.slice(0, 3))  // Hel (012 까지 추출됨, 3 직전까지 추출)



// 4. replace : 첫 번째 인수 부분을 두 번째 인수 부분으로 교체한다. 
  const str = 'Hello world'
  console.log(str.replace('world', 'SSW!')) // Hello SSW!
  console.log(str.replace(' world', ''))    // Hello


  
// 5. match
  const str = 'dfg1425@gmail.com' 
  console.log(str.match(/.+(?=@)/)[0])   // dfg1425



// 6. trim : 모든 공백 문자를 제거
  const str = '      Hello world     '
  console.log(str.trim())   // Hello wolrd