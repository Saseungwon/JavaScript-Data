// 전개 연산자(Spread)

    // 1 : ...fruits
        const fruits = ['Apple', 'Banana', 'Cherry']
        console.log(fruits)       // ['Apple', 'Banana', 'Cherry']
        console.log(...fruits)    // Apple Banana Cherry

        function toObject(a, b, c) {
          return {
            a: a,
            b: b,
            c: c
          }
        }
        // 동일한 기능, 그러나 아이템 수가 10개 이상만 되어도 아래 코드로 사용하는 게 힘들 거다. 전개 연산자는 ...만 해주면 되는데
        console.log(toObject(...fruits))                        // {a: "Apple", b: "Banana", c: "Cherry"}
        console.log(toObject(fruits[0], fruits[1], fruits[2]))  // {a: "Apple", b: "Banana", c: "Cherry"}




    // 2 : toObject(a, b, ...c) 나머지 매개변수
        const fruits = ['Apple', 'Banana', 'Cherry', 'Orange'] // Orange 추가
        console.log(fruits)      
        console.log(...fruits)  

        function toObject(a, b, ...c) {  // 매개변수에도 전개연산자 사용가능, 나머지의 모든 인수들을 다 받아내는 역할을 한다.(나머지 매개변수)
          return {
            a: a,
            b: b,
            c: c
          }
        }
        console.log(toObject(...fruits))  // {a: "Apple", b: "Banana", c: Array(2){0: "Cherry", 1: "Orange"}}




    // 3 : 축약형 
        const fruits = ['Apple', 'Banana', 'Cherry', 'Orange'] // Orange 추가
        console.log(fruits)      
        console.log(...fruits)  

        const toObject = (a, b, ...c) => ({ a, b, c })   // 속성의 이름과 데이터의 이름이 같으면 축약형으로 만들 수 있다.  
        console.log(toObject(...fruits)) 
