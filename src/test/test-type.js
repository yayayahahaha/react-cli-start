import { detectType } from '../utils/index'

export const testType = () => {
  describe('Detect Type', () => {
    test('detect type function', () => {
      // string
      _stringPart()

      // number
      _numberPart()

      // boolean
      _booleanPart()

      // function
      _functionPart()

      // object
      _objectPart()

      // array
      _arrayPart()

      // null
      _nullPart()

      // promise
      _promisePart()
    })
  })
}

// ['array', 'null', 'promise']
// ['string', 'number', 'boolean', 'function', 'object', 'undefined']
function _stringPart() {
  expect(detectType('')).toBe('string')
  expect(detectType('123')).toBe('string')
  expect(detectType('hello')).toBe('string')
}
function _numberPart() {
  expect(detectType(0)).toBe('number')
  expect(detectType(0.1)).toBe('number')
  expect(detectType(123)).toBe('number')
  expect(detectType(NaN)).toBe('number')
}
function _booleanPart() {
  expect(detectType(true)).toBe('boolean')
  expect(detectType(false)).toBe('boolean')
}
function _functionPart() {
  expect(detectType(Function.prototype)).toBe('function')
  expect(detectType(f => f)).toBe('function')
  expect(detectType(function() {})).toBe('function')
  expect(detectType(function() { return null })).toBe('function')

  expect(detectType(Promise)).toBe('function')
  expect(detectType(Number)).toBe('function')
  expect(detectType(String)).toBe('function')
  expect(detectType(Function)).toBe('function')
  expect(detectType(Object)).toBe('function')
}
function _objectPart() {
  expect(detectType({})).toBe('object')
  expect(detectType(Object({}))).toBe('object')
  expect(detectType(Object.assign({}))).toBe('object')
}
function _arrayPart() {
  expect(detectType([])).toBe('array')
  expect(detectType([1, 2, 3])).toBe('array')
  expect(detectType([null, undefined])).toBe('array')
  expect(detectType(new Array(10))).toBe('array')
  expect(detectType(Array(10))).toBe('array')
  expect(detectType([...new Array(10)])).toBe('array')
  expect(detectType([...Array(10)])).toBe('array')
}
function _nullPart() {
  expect(detectType(null)).toBe('null')
}
function _promisePart() {
  expect(detectType(new Promise((resolve, reject) => resolve()))).toBe('promise')
  expect(detectType(Promise.all([]))).toBe('promise')
  expect(detectType(Promise.resolve())).toBe('promise')
  expect(detectType(Promise.reject().catch(e => e))).toBe('promise')
}
