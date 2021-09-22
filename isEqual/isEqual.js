function isEqual(obj1, obj2) {
  if (arguments.length === 0)
    throw new TypeError('isEqual requires at least 2 argument, but only 0 were passed');
  if (arguments.length === 1)
    throw new TypeError('isEqual requires at least 2 argument, but only 1 were passed');

  // null 값 비교
  if (obj1 === null && obj2 === null) return true;

  // 일반 객체 & 배열 비교
  if (
    typeof obj1 === 'object' &&
    typeof obj2 === 'object' &&
    (obj1.constructor === Object || obj1.constructor === Array) &&
    (obj2.constructor === Object || obj2.constructor === Array)
  ) {
    // 일반 객체와 배열이 비교대상일 경우
    if (obj1.constructor !== obj2.constructor) return false;

    // 객체 사이즈 체크
    if (Object.keys(obj1).length !== Object.keys(obj2).length) return false;

    // 키를 돌며 값이 객체일 경우, 재귀호출
    // 값이 서로 다를 경우 false
    // for문을 모두 통과하면 true
    for (const key of Object.keys(obj1)) {
      if (typeof obj1[key] === 'object' && typeof obj2[key] === 'object')
        return isEqual(obj1[key], obj2[key]);

      if (obj1[key] !== obj2[key]) return false;
    }
    return true;
  }

  // 원시값 및 빌트인 객체, 함수 비교
  return Object.is(obj1, obj2);
}

export default isEqual;
