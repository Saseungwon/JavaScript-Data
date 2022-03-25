// 구조 분해 할당 (Destructuring assignment)
// 비구조화 할당

    const user = {
      name: 'SSW', 
      age: 27, 
      email: 'dfg1425@gmail.com',
      address: 'USA'
    }
    const {name: 사승원, age, email, address = 'Korea'} = user    // <- 구조분해 하는 법(객체의 요소가 많을 때 필요한 것들만 꺼내어 사용하는 장점)
    // name: 사승원 꺼내온 속성의 데이터가 마음에 들지 않다면 구조분해할당 내에서 새로 지정해줄 수 있다. 
    // address = 'Korea' : 값이 없다면 기본값을 지정해줄 수 있음 


    console.log(`사용자의 이름은 ${사승원}입니다`)              // 사용자의 이름은 SSW입니다
    console.log(`${사승원}의 나이는 ${age}입니다`)            // SSW의 나이는 27입니다
    console.log(`${사승원}의 이메일 주소는 ${email}입니다`)     // SSW의 이메일 주소는 dfg1425...
    console.log(address)                                // Korea

    const fruits = ['Apple', 'Banana', 'Cherry']
    const [a, b, c, d] = fruits   // 배열데이터는 [] 객체데이터는 {} 각 데이터의 속성에 맞게 써준다.
    console.log(a, b, c, d)

    // Banana만 추출하고 싶을 때
    const [, b] = fruits
    console.log(b) // Banana