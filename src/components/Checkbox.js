import { useState, useEffect, useMemo } from 'react'
import { useWindowSize, useMousePosition } from '../customHook/hooks'

function Checkbox() {
  const [checked, setChecked] = useState(false)
  const [list, setList] = useState([])

  const staticList = useMemo(() => {
    return list.map(storeBoolean => ({ value: storeBoolean, currentChecked: checked  }))
  }, [checked, list])

  // 捕捉視窗大小變動
  const [width, height] = useWindowSize()
  useEffect(() => {
    console.log(`window width: ${width}`)
    console.log(`window height: ${height}`)
  }, [width, height])

  // 捕捉滑鼠游標
  const [x, y] = useMousePosition()
  useEffect(() => {
    console.log(`x: ${x}`)
    console.log(`y: ${y}`)
  }, [x, y])

  useEffect(() => {
    console.log(`checked: ${checked}`)
  }, [checked])

  useEffect(() => {
    console.log(`staticList: ${JSON.stringify(staticList, null, 2)}`)
  }, [staticList])

  const pushToList = () => setList(list => [...list, checked])

  return (
    <>
      <input
        id="click-me"
        type="checkbox"
        value={checked}
        onChange={() => setChecked(checked => !checked)}
      />
      <label htmlFor="click-me">點我</label>
      <p>{ checked ? 'checked' : 'not checked' }</p>
      <button onClick={pushToList}>push me</button>
    </>
  )
}

export default Checkbox
