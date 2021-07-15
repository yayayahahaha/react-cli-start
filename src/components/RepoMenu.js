import { useIterator } from '../customHook/hooks'
import { useEffect } from 'react'

function RepoMenu(props) {
  const { repositories = [], onSelect = Function.prototype } = props

  const [item, pre, next] = useIterator(repositories, 0)
  const { name, currentIndex: index } = item

  useEffect(() => {
    if (!name) return
    onSelect(name)
  }, [name, onSelect])

  return (
    <div>
      <p>{index} - {name}</p>
      <button onClick={pre}>pre</button>
      <button onClick={next}>next</button>
    </div>
  )
}

export default RepoMenu
