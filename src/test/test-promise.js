export const testPromise = () => {
  describe('Test Promise', () => {
    test('Promise then', () => {
      const promise = new Promise(resolve => resolve(123))
      return promise.then(data => expect(data).toBe(123))
    })
    test('Promise await', async () => {
      const promise = new Promise(resolve => resolve(123))
      expect(await promise).toBe(123)
    })

    test('Promise then with timeout', () => {
      const promise = new Promise(resolve => setTimeout(() => resolve(123), 1))
      return promise.then(data => expect(data).toBe(123))
    })
    test('Promise await with timeout', async () => {
      const promise = new Promise(resolve => setTimeout(() => resolve(123), 1))
      expect(await promise).toBe(123)
    })

    test('Promise with loooooong operate', async () => {
      const number = 100 // over 100000000 will be veeeeeeery lag, please don't
      const promise = new Promise(resolve => resolve([...Array(number)].map(i => Date.now())))
      expect((await promise).length).toBe(number)
    })
  })
}