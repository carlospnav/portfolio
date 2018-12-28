import { FormatRGBToGradient } from '../index'

const rgbs = {
  bgBlue: {
    r: 56,
    g: 38,
    b: 151
  },
  bgPurple: {
    r: 100,
    g: 60,
    b: 170
  },
  articleBg: {
    r: 240,
    g: 240,
    b: 240
  },
  articleText: {
    r: 80,
    g: 80,
    b: 80
  },
  articleSeparator: {
    r: 160,
    g: 160,
    b: 160
  }
}

const colors = {
  bgBlue: FormatRGBToGradient(rgbs.bgBlue),
  bgPurple: FormatRGBToGradient(rgbs.bgPurple),
  articleBg: FormatRGBToGradient(rgbs.articleBg),
  articleText: FormatRGBToGradient(rgbs.articleText),
  articleSeparator: FormatRGBToGradient(rgbs.articleSeparator)
}

export default colors
