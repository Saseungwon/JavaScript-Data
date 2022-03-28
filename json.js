// JSON (JavaScript Object Notation)
// 자바스크립트의 객체 표기법

    import json from './json.json'
    console.log(json) // 원래는 문자데이터인데 객체데이터처럼 사용이 된다

    const user = {
      name: 'SSW', 
      age: 36,
      emails: [
        'dfg1425@gmail.com',
        'tktmddnjs@gmail.com'
      ]
    }
    console.log('user', user)

    // 문자 데이터로 변환
        const str = JSON.stringify(user)
        console.log('str', str)
        console.log(typeof str)

    // 객체 데이터로 변환
        const obj = JSON.parse(str)
        console.log('obj', obj)