// 1. find() : 만족하는 첫 번째 요소의 값을 반환, 없다면 undefinded
    const array = [5, 12, 8, 130, 44]
    const found = array.find(element => element >  10)
    console.log(found) // 12   찾은 후 바로 그 첫 번째 값만 반환



// 2. .length
    const numbers = [1,2,3,4]
    const fruits = ['Apple', 'Banana', 'Cherry']

    console.log(numbers.length)   // 4
    console.log(fruits.length)    // 3
    console.log([1, 2].length)    // 2
    console.log([].length)        // 0



// 3. .concat() : 배열이 합쳐짐, 원본의 배열 데이터에는 전혀 영향을 미치지 않는다. 
    const numbers = [1,2,3,4]
    const fruits = ['Apple', 'Banana', 'Cherry']

    console.log(numbers.concat(fruits))   //  {0: 1, 1: 2, 2: 3, 3: 4, 4: "Apple", 5: "Banana", 6: "Cherry"}



// 4. .forEach()
    const numbers = [1,2,3,4]
    const fruits = ['Apple', 'Banana', 'Cherry']

    fruits.forEach(function (element, index, array){
      console.log(element, index, array)
    })    
    // Apple 0 [['Apple', 'Banana', 'Cherry']]
    // Banana 1 [['Apple', 'Banana', 'Cherry']]
    // Cherry 2 [['Apple', 'Banana', 'Cherry']]



// 5. .map() : 내부 콜백에서 반환된 특정 데이터를 기준으로 새로운 배열을 반환해줌
    const numbers = [1,2,3,4]
    const fruits = ['Apple', 'Banana', 'Cherry']

    //일반함수
    const a = fruits.forEach(function(fruits, index){
      console.log(`${fruits} - ${index}`)
    })
    //화살표함수
    const a = fruits.forEach((fruits, index) => {
      console.log(`${fruits} - ${index}`)
    })
    console.log(a)
    // Apple-0
    // Banana-1
    // Cherry-2


    // 일반함수
    const b = fruits.map(function(fruits, index){
      return {
        id : index,
        name : fruits
      }
    })
    //화살표함수
    const b = fruits.map((fruits, index) => ({    
      id : index,
      name : fruits
    }))
    console.log(b)    // {id: ..., name: ...}  객체데이터로 새롭게 만들어짐



// 6. filer() : 배열 데이터 안에 있는 아이템들을 특정한 기준에 의해서 핉터링 하여 반환한다.
    const numbers = [1,2,3,4]
    const fruits = ['Apple', 'Banana', 'Cherry']

    const a = numbers.map(number => number < 3)
    console.log(a)    // true, true, false, false

    const b = numbers.filter(number => number < 3)
    console.log(b)    // [1, 2]

    console.log(numbers) // [1,2,3,4] 원본은 전혀 지장을 주지 않는다. 



// 7. find() .findIndex()
    const numbers = [1,2,3,4]
    const fruits = ['Apple', 'Banana', 'Cherry']

    // find : 찾은 순간 반복이 멈춘다. 
    const a = fruits.find(fruits => /^B/.test(fruit))
    // 대문자 B로 시작하는 것
    console.log(a)    // Banana 


    // findIndex : 찾은 아이템의 인덱스를 반환함
    const b = fruits.findIndex(fruits => /^C/.test(fruit))
    console.log(b)    // 2 



// 8. includes() : 인수가 포함되어 있는지 않은지 true false로 리턴됨
    const numbers = [1,2,3,4]
    const fruits = ['Apple', 'Banana', 'Cherry']

    const a = numbers.includes(3)
    console.log(a)    // true

    const b = fruits.includes('SSW')
    console.log(b)    // false


// 9. push() .unshify : 원본 수정됨 주의!
    const numbers = [1,2,3,4]
    const fruits = ['Apple', 'Banana', 'Cherry']

    numbers.push(5)       // push : 맨뒤에 삽입됨
    console.log(numbers)  // [1,2,3,4,5]   

    numbers.unshift(0)    // unshift : 맨앞에 삽입됨
    console.log(numbers)  // [0,1,2,3,4,5]



// 10. .reverse() : 원본 수정됨 주의!, 배열의 아이템 순서를 뒤집는다. 
    const numbers = [1,2,3,4]
    const fruits = ['Apple', 'Banana', 'Cherry']

    numbers.reverse()
    fruits.reverse()
    console.log(numbers)    // [4,3,2,1]
    console.log(fruits)     // ['Cherry', 'Banana', 'Apple']



// 11. .splice() : 원본 수정됨 주의! 
    const numbers = [1,2,3,4]
    const fruits = ['Apple', 'Banana', 'Cherry']

    numbers.splice(2, 1)  // 인덱스 번호 2번에서 아이템 1개를 지워라!
    console.log(numbers) // [1, 2, 4]

    numbers.splice(2, 0, 999)  // 세번째 인수는 999를 끼워넣으라는 뜻!
    console.log(numbers) // [1, 2, 999, 3, 4]

    fruits.splice(2, 0, 'Orange')
    console.log(fruits) // ['Apple', 'Banana', 'Orange', 'Cherry']