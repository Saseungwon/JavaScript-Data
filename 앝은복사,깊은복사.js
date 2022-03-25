import _ from 'lodash'

// 앝은 복사(Shallow copy), 깊은 복사(Deep copy)

const user = {
  name: 'SSW',
  age: 27, 
  emails: ['dfg1425@gmail.com']
}
const copyUser = user
console.log(copyUser === user)      // true - 같은 메모리 주소를 바라봄
user.age = 22 
console.log('user', user)           // {... age: 22 ...}
// 문제발생 : user의 age만 수정하고 싶은데 copyUser의 age도 바뀜
console.log('copyUser', copyUser)   // {... age: 22 ...}  


// 해결방법1 : Object.assign
const copyUser = Object.assign({}, user)    // 대상객체에다가 출처객체의 속성들을 담아서 Object.assign에 담아서 반환한다.
console.log(copyUser === user)              // false
user.age = 22 
console.log('user', user)           // {... age: 22 ...}
// 문제해결! 
console.log('copyUser', copyUser)   // {... age: 27 ...}  


// 해결방법2 : 전개연산자
const copyUser = {...user}         // 새로운 메모리에 copyUser를 할당해줌
console.log(copyUser === user)     // false
user.age = 22 
console.log('user', user)          // {... age: 22 ...}
// 문제해결! 
console.log('copyUser', copyUser)  // {... age: 27 ...}  



// 깊은 복사의 활용
user.emails.push('tktmddnjs@gmail.com')
console.log(user.emails === copyUser.emails)    // true
console.log('user', user)               // {0: dfg1425@gmail.com, 1: tktmddnjs@gmail.com}
console.log('copyUser', copyUser)       // {0: dfg1425@gmail.com, 1: tktmddnjs@gmail.com}