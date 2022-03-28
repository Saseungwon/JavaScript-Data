// lodash 깊은복사 활용예제
    var object = [{ 'a': 1 }, { 'b': 2 }];

    var deep = _.cloneDeep(object);
    console.log(deep[0] === object[0]);   // 메모리 주소가 같지 않으므로 false