import { useIterator } from '../customHook/hooks'
import { useEffect } from 'react'

function RepoMenu(props) {
  const {
    repositories = [],
    onSelect = Function.prototype,
    selectedRepo = 0
  } = props

  const [item, pre, next] = useIterator(repositories, selectedRepo)
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
