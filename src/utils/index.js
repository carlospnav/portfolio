export const objToArr = (obj) => Object.keys(obj).map(key => obj[key])
export const ArrToObj = (arr) => arr.reduce((obj, item) => {
  obj[item.id] = item
  return obj
}, {})
