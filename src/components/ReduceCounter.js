import { useReducer, useCallback } from 'react'

function ReduceCounter() {
  // useCallback works
  const doCounting = useCallback((value) => {
    console.log('useCallback style')
    return value + 1
  }, [])

  const [number, setNumber] = useReducer(doCounting, 0)

  return (
    <>
      <div>count: {number}</div>
      <button onClick={setNumber}>+</button>
    </>
  )
}

export default ReduceCounter
