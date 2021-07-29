import { timesTwo, add, } from '../utils/index'

export const testMath = () => {
  describe('Math fucntions', () => {
    test('Multiples by 2', () => {
      expect(timesTwo(0.5)).toBe(1)
      expect(timesTwo(1)).toBe(2)
      expect(timesTwo(2)).toBe(4)
      expect(timesTwo(4)).toBe(8)
      expect(timesTwo(8)).toBe(16)
    })

    test('Add', () => {
      expect(add(0, 0)).toBe(0)
      expect(add(1, 2)).toBe(3)
      expect(add(1.5, 3)).toBe(4.5)

      expect(add(null, undefined)).toBe(null)
      expect(add(NaN)).toBe(NaN)
      expect(add(NaN, NaN)).toBe(NaN)
      expect(add('this-is-string', f => f)).toBe(null)
    })
  })
}
