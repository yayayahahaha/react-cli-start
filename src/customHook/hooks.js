import { useState, useEffect, useLayoutEffect, useRef, useMemo } from 'react'

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
