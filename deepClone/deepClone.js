const deepClone = function (obj) {
  // 인수로 전달받은 값이 null이거나 객체가 아니면 그대로 반환
  if (obj === null || typeof obj !== 'object') return obj;

  const cloneObj = {};

  for (const key of Object.keys(obj)) {
    // property value가 null이 아닌 object일 경우, 다시 deepClone하는데
    if (typeof obj[key] === 'object' && obj[key] !== null) {
      if (Array.isArray(obj[key])) {
        // property value가 배열일 경우, 배열을 순회하며 deepClone
        cloneObj[key] = obj[key].slice().map(value => deepClone(value));
      } else {
        // 일반 객체일경우 deepClone
        cloneObj[key] = deepClone(obj[key]);
      }
    } else {
      // 원시값 & function일 경우 그대로 대입
      cloneObj[key] = obj[key];
    }
  }

  return cloneObj;
};

export default deepClone;
