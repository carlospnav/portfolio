export const objToArr = (obj) => Object.keys(obj).map(key => obj[key])
export const ArrToObj = (arr) => arr.reduce((obj, item) => {
  obj[item.id] = item
  return obj
}, {})

export const FormatRGBToGradient = ({ r, g, b, a }) => {
  if (!r || !g || !b) {
    throw new Error('You must provide an object with an r, g and b properties to this function.')
  }
  return `rgb(${r}, ${g}, ${b}${a ? `, ${a}` : ''})`
}

export const Design = {
  colors: {
    bgBlue: {
      r: 56,
      g: 38,
      b: 151
    },
    bgPurple: {
      r: 100,
      g: 60,
      b: 170
    }
  }
}
