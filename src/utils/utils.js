/********************************************************************************
 * 判断是否为 Array
 ********************************************************************************/
const isArray = (obj) => {
  return Object.prototype.toString.call(obj) === '[object Array]';
}

/********************************************************************************
 * 判断是否为 Object
 ********************************************************************************/
const isObject = (obj) => {
  return Object.prototype.toString.call(obj) === '[object Object]';
}

/********************************************************************************
 * 判断是否为 function
 ********************************************************************************/
const isFn = (fn) => {
  return 'function' === typeof fn;
}

/********************************************************************************
 * 浅拷贝
 ********************************************************************************/
const clone = (src, keys) => {
  if (!keys || keys.length === 0) {
    return {};
  }

  let dest = {};
  keys.forEach(key => {
    if (src.hasOwnProperty(key)) {
      dest[key] = src[key];
    }
  });
  return dest;
}

const mapClone = (src, kvs) => {
  if (!kvs || Object.keys(kvs).length === 0) {
    return {};
  }

  let dest = {};
  Object.keys(kvs).forEach(key => {
    if (src.hasOwnProperty(key)) {
      dest[kvs[key]] = src[key];
    }
  });
  return dest;
}

/********************************************************************************
 * 数组比较
 ********************************************************************************/
const compareArray = (src, dest) => {
  if (src.length !== dest.length) {
    return false;
  }
  for (let i = src.length; i >= 0; i--) {
    if (!compare(src[i], dest[i])) {
      return false;
    }
  }
  return true;
}

/********************************************************************************
 * 对象比较
 ********************************************************************************/
const compareObject = (src, dest) => {
  if (Object.keys(src).length !== Object.keys(dest).length) {
    return false;
  }

  const keys = Object.keys(src);
  for (let i = 0; i < keys.length; i ++) {
    if (!compare(src[keys[i]], dest[keys[i]])) {
      return false;
    }
  }
  return true;
}

/********************************************************************************
 * 比较
 ********************************************************************************/
const compare = (src, dest) => {
  if (src === dest) {
    return true;
  }

  if (src && dest) {
    if (isArray(src) && isArray(dest)) { // Array
      return compareArray(src, dest);
    } else if (isObject(src) && isObject(dest)) { // Object
      return compareObject(src, dest);
    } else {
      return src === dest;
    }
  }
  return false;
}

/********************************************************************************
 * 函数包裹后调用
 ********************************************************************************/
const callAfter = (context, fn, ...args) => {
  if (!isFn(fn)) {
    return;
  }
  if (Object.prototype.toString.call(args[0]) === '[object Arguments]') {
    return fn.call(context, ...[].slice.call(args[0]));
  }
  return fn.call(context, ...args);
}

/********************************************************************************
 * 导出
 ********************************************************************************/
export {
  isArray, isFn, clone, mapClone, compare, callAfter
}