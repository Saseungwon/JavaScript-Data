// lodash의 여러 가지 메서드들
import _ from 'lodash'

    const usersA = [
      {userId: '1', name: 'Seungwon'},
      {userId: '2', name: 'SA'},
    ]
    const usersB = [
      {userId: '1', name: 'Seungwon'},
      {userId: '3', name: 'SAM'},
    ]
    const usersC = usersA.concat(usersB)
    console.log('concat', usersC)
    // {userId: '1', name: 'Seungwon'},
    // {userId: '2', name: 'SA'},
    // {userId: '1', name: 'Seungwon'},
    // {userId: '3', name: 'SAM'},

    // 1. _.uniqBy : 중복제거(배열데이터가 하나일 때 사용)
        console.log('uniqBy', _.uniqBy(usersC, 'userId'))
        // {userId: '1', name: 'Seungwon'},
        // {userId: '2', name: 'SA'},
        // {userId: '3', name: 'SAM'},

    // 2. _.unionBy : 중복제거(배열데이터가 여러 개일 때 사용)
        const usersD = _.unionBy(usersA, usersB, 'userId')
        console.log('unionBy', usersD)
        // {userId: '1', name: 'Seungwon'},
        // {userId: '2', name: 'SA'},
        // {userId: '3', name: 'SAM'},


    //

    const usersA = [
      {userId: '1', name: 'HEROPY'},
      {userId: '2', name: 'Neo'},
      {userId: '3', name: 'Amy'},
      {userId: '4', name: 'Evan'},
      {userId: '5', name: 'Lewis'},
    ]

    // 3. _.find : 해당 객체데이터 반환
        const foundUser = _.find(users, {name: 'Amy'})

    // 4. _.findIndex : 해당 객체데이터 인덱스 번호 반환
        const foundUserIndex = _.findIndex(users, {name: 'Amy'})
        console.log(foundUser)        //   {userId: '3', name: 'Amy'},
        console.log(foundUserIndex)   //   2

    // 5. _.remove
        _.remove(users, {name: 'HEROPY'})
        console.log(users)
        // {userId: '2', name: 'Neo'},
        // {userId: '3', name: 'Amy'},
        // {userId: '4', name: 'Evan'},
        // {userId: '5', name: 'Lewis'},