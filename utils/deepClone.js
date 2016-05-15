// 어떤 것에 인스턴스이면 프로토타입 체인으로 엮여 있는 접근 가능한 속성, 함수들까지 모조리 가져와서 객체로 만들어 준다.
// lodash clone은 좀더 많은 걸 해준다.

import { obj1, obj2, obj3, obj4 } from './testObj';
import mixin from './mixin';

var objs = mixin(obj1, obj2, obj4);
console.log('objs', objs);


function deepClone() {

}
