import { useState, useEffect, useMemo } from 'react'

function Checkbox() {
  const [checked, setChecked] = useState(false)
  const [list, setList] = useState([])

  const staticList = useMemo(() => {
    return list.map(storeBoolean => ({ value: storeBoolean, currentChecked: checked  }))
  }, [checked, list])

  useEffect(() => {
    // console.log(`checked: ${checked}`)
  }, [checked])

  useEffect(() => {
    // console.log(`staticList: ${JSON.stringify(staticList, null, 2)}`)
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
