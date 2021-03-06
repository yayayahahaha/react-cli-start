import { useState, useEffect, useLayoutEffect, useRef, useMemo, useCallback } from 'react'
import faker from 'faker'

export const useInput = (originalValue) => {
  const [value, setValue] = useState(originalValue)

  const onChange = e => setValue(e.target.value)

  return [
    { value, onChange }, // default value and onChanged handle
    () => setValue(originalValue) // reset function
  ]
}

// 視窗大小改變
export const useWindowSize = () => {
  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)

  const resize = () => {
    setWidth(window.innerWidth)
    setHeight(window.innerHeight)
  }

  useLayoutEffect(() => {
    window.addEventListener('resize', resize)
    resize()
    return () => window.removeEventListener('resize', resize)
  }, [])

  return [width, height]
}

// 追蹤滑鼠游標
export const useMousePosition = () => {
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)

  const setPosition = (event) => {
    const { x, y } = event
    setX(x)
    setY(y)
  }

  useLayoutEffect(() => {
    window.addEventListener('mousemove', setPosition)
    return () => window.removeEventListener('mousemove', setPosition)
  }, [])

  return [x, y]
}

// 取得useState的值的前一個數值:
// 透過ref 在update 的時候的恆定性與執行順序上實作出來的customHooks
// https://www.codebeast.dev/react-memoize-hooks-useRef-useCallback-useMemo/
export const usePrevious_useMemo = (value) => {
  const ref = useMemo(() => ({ previous: null }), []
    )

  // const ref = useRef()
  useEffect(() => {
    ref.previous = value
  })
  return ref.previous
}
export const usePrevious = (value) => {
  const ref = useRef()
  useEffect(() => {
    ref.current = value
  })
  return ref.current
}

// 請求用的useFetch hook, 處理好了success, loading 和error
export const useFetch = (url) => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const mountedChecker = useMountedRef()

  useEffect(() => {
    (async() => {
      if (!url) return setError({ message: 'NO URL!' })

      if (false) {
        // test data
        setData([...Array(30)].map(() => ({name: faker.name.findName()})))
        return
      }
      setData(null)
      setError(null)

      if (typeof url !== 'string') return
      setLoading(true)

      await (() => new Promise(r => setTimeout(r, 3000)))() // simulate slow fetching
      const response = await fetch(url)

      if (!mountedChecker.current) return

      setLoading(false)
      const fetchError = response.status !== 200 ? true : false

      const data = await response.json()
      if (fetchError) return void setError(data)
      setData(data)
    })()
  }, [url, mountedChecker])

  return { data, error, loading }
}

// 輪詢
export const useIterator = (...allProps) => {
  const [items = [], initialindex = 0] = allProps

  const [i, setIndex] = useState(initialindex)
  const lastIndex = items.length - 1

  const prev = useCallback(() => {
      let destination = i - 1
      if (i === 0) destination = lastIndex
        setIndex(destination)
    }, [i, lastIndex])
  const next = useCallback(() => {
      let destination = i + 1
      if (i === lastIndex) destination = 0
        setIndex(destination)
    }, [i, lastIndex])
  const item = useMemo(f => items[i], [i, items])

  return [{...item, currentIndex: i}, prev, next]
}

// trying! but it seems not that work as I thought...
export const useFetchConfig = (key) => {
  // const { key, login: defaultLogin } = props
  const [login, setLogin] = useState('')
  const [url, setUrl] = useState('')

  const createUrl = useCallback(function(key) {
    if (!login) return null
    switch (key) {
      case 'detail':
        return `https://api.github.com/users/${login}`
      case 'repositories':
        return `https://api.github.com/users/${login}/repos`
      default:
        return null
    }
  }, [login])
  const loginChanged = useCallback(function(login) {
    if (!login) return
    console.log('in loginChanged, ', login)
    setLogin(login)
    const url = createUrl(key)
    setUrl(url)
  }, [key, createUrl])

  useEffect(() => {
    console.log(`in useEffect: login: ${login}, key: ${key}, url: ${url}`)

    if (!login) return
    setUrl(createUrl(key))
  }, [setUrl, createUrl, key, login, url])

  return [url, loginChanged]
}

// component mounted checked
// 用法: 在執行promise 相關的事宜時，如果在settle 之前因為父層的值變動造成子component 消失
// 導致React 無法將Promise 回傳的值綁定到畫面上的時候使用
export const useMountedRef = () => {
  // 利用 useRef 的特性讓該值不會每次都被刷掉
  const mounted = useRef(false)

  useEffect(() => {
    // 如果 useEffect 的 depsArray 是空的，代表每次 re-render 都會執行
    // 且，如果回傳一個 function 的話，會在component 從畫面上 unmounted 的時候執行該 function
    mounted.current = true
    return () => (mounted.current = false)
  }, [])

  return mounted
}
