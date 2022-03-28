// localstorageMDN

    // localStorage는 반영구적으로 사용됨 - 사용성이 더 높다.
    // sessionStorage는 페이지를 닫으면 데이터가 사라진다. 

    // 예제
        // 1. 특정 데이터를 브라우저에 저장하기
        localStorage.setItem('myCat', 'Tom') // (key, value)

        // 2. 특정 데이터를 읽어오기 
        const cat = localStorage.getItem('myCat')

        // 3. 데이터 제거하기
        localStorage.removeItem('myCat')




const user = {
  name: 'SSW',
  age: 36,
  email: [
    'admin@gmail.com',
    'dfg1425@gmail.com'
  ]
}

localStorage.setItem('user', JSON.stringify(user))  
// Key : user
// Value : {name: 'SSW', age: 36, email: [ 'admin@gmail.com', 'dfg1425@gmail.com' ]}
JSON.parse(localStorage.getItem('user'))
localStorage.removeItem('user')   // 삭제할 데이터의 키값을 명시


// 객체데이터 수정하기
const str = localStorage.getItem('user')
const obj = JSON.parse(str)
obj.age = 22                                      // 데이터 바꿔주기
localStorage.setItem('user', JSON.stringify(obj)) // 데이터를 다시 넣어주기



// 위의 방법보다 편하게 관리하기 -> Lowdb