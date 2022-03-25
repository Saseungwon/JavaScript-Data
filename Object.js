// 1. Object.assign : source로부터 target으로 속성을 복사하여 들어간다.

    const target = { a: 1, b: 2};
    const source = { b: 4, c: 5};

    const returnTarget = object.assign(target, source);

    console.log(target);
    // {a: 1, b: 4, c: 5}    겹치는 요소는 덮어써진다. 
    console.log(returnTarget);
    // {a: 1, b: 4, c: 5}


    const userAge = { 
      name: 'SSW',
      age: 27
    }
    const userEmail = { 
      name: 'SSW',
      email: 'dfg1425@gmail.com'
    }

    const target = Object.assign(userAge, userEmail); // userAge, userEmail에 직접적으로 사용 불가능, Object라는 전역 객체에 사용
    console.log(target)               //  {name: 'SSW', age: 27, email: 'dfg1425@gmail.'}
    console.log(userAge)              //  {name: 'SSW', age: 27, email: 'dfg1425@gmail.'}
    console.log(target === userAge)   // true  같은 메모리를 바라보고 객체 자체가 동일해서 true

    const a = {k: 123}
    const b = {k: 123}
    console.log(a === b)    // false  형태는 같은데 다른 메모리에 있어서 false



    // 새로운 객체 만드는 법 (새로운 객체 데이터를 만듦으로서 원본 데이터를 지킬 수 있음)
    const target = Object.assign({}, userAge, userEmail);  // ({대상객체}, 출처객체, 출처객체)
    console.log(target)               //  {name: 'SSW', age: 27, email: 'dfg1425@gmail.'} 
    console.log(userAge)              //  {name: 'SSW', age: 27,}
    console.log(target === userAge)   // false




// 2. keys  : 배열 데이터로 키가 만들어짐

    const user = {
      name: 'SSW', 
      age: 27, 
      email: 'dfg1425@gmail.com'
    }

    const keys = Object.keys(user)
    console.log(keys)   // ['name', 'age', 'email']

    console.log(user['email'])  // dfg1425@gmail.com'

    const values = keys.map(key => user[key])
    console.log(values)         // {name: 'SSW', age: 27, email: 'dfg1425@gmail.'} 