import _ from 'lodash'              // from 'node_modules'
import getType from './getType'     // getType.js
import {random, user as ssw } from './getRandom' // getRandom.js
import * as R from './getRandom'    // * : 모든 내보내지는 데이터를 가져옴, R은 내가 지정하는 이름



// export(default) - 하나의 js 파일에는 하나의 default만 가능하다. 하나만 가져오고 싶을 때 사용
export default function (data) {     // default는 함수의 이름을 지정해주지 않아도 된다. 
  return Object.prototype.toString.call(data).slice(8,10)
}

// export(X) - 여러 개를 가져와야 할 때 사용
export function random() {          // default가 아니면 이름을 지정해서 사용할 때 import {random} from 이렇게 사용
  return Math.floor(Math.random()*10)
}
export const user = {
  name: 'SSW',
  age: 36
}
export default 123