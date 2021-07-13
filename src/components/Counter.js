import { useState/*, useRef, useEffect*/ } from 'react'
import { usePrevious } from '../customHook/hooks'

function Counter() {
  const [count, setCount] = useState(0)
  const previousCount = usePrevious(count)

  function doCount() {
    setCount(count => count + 1)
  }

  return <div>
    <p>current count: {count}</p>
    <p>previous count: {previousCount}</p>
    <button onClick={doCount}>Do Count</button>
  </div>
}

export default Counter
