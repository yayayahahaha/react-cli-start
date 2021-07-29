
// 取得github user repo 的readme
export const loadReadme = async(login, repo) => {
  if (!login || !repo) return
  const url = `https://api.github.com/repos/${login}/${repo}/readme`

  const { download_url } = await (await fetch(url)).json()
  if (!download_url) throw new Error('發生錯誤啦')
  const markdown = await (await fetch(download_url)).text()

  return markdown
}

export const timesTwo = (value) => {
  return value * 2
}

export const add = (a, b) => {
  const aIsNumber = detectType(a) === 'number'
  const bIsNumber = detectType(b) === 'number'
  const aIsNaN = Number.isNaN(a)
  const bIsNaN = Number.isNaN(b)

  if (aIsNaN || bIsNaN) return NaN
  if (!aIsNumber || !bIsNumber) return null

  return a + b
}

export const detectType = value => {
  // if (Promise.resolve() instanceof Promise) return 'promise'
  // ['array', 'null', 'promise']
  // ['string', 'number', 'boolean', 'function', 'object', 'undefined']
  if (Object.prototype.toString.call(value) === '[object Promise]') return 'promise'
  if (value === null) return 'null'
  if (Array.isArray(value)) return 'array'
  return typeof value
}

export const promiseExample = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve('hello'), 300)
  })
}
