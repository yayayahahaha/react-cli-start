import { v4 } from 'uuid'

const colorData = [...Array(3)]
  .map((n, index) => {

    const colorCode = `${_randomColor()}`

    return {
      id: `${v4()}`,
      title: `color is ${colorCode}`,
      color: `${colorCode}`,
      rating: _doRandom(6)
    }
  })

function _randomColor() {
  return `rgb(${_doRandom(256)}, ${_doRandom(256)}, ${_doRandom(256)})`
}
function _doRandom(maxMinusOne = 256) {
  return Math.floor(Math.random() * maxMinusOne)
}

export default colorData
