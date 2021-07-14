import Cat from './Cat'
import { useState, memo } from 'react'
import { v4 } from 'uuid'

const teamRwby = [
  { name: 'ruby', image: 'http://puu.sh/oXDLO/7b5a932ef1.jpg'},
  { name: 'weiss', image: 'http://puu.sh/oXDNd/169a74d36c.jpg'},
  { name: 'blake', image: 'http://puu.sh/oXDNQ/bec8c790e4.jpg'},
  { name: 'yang', image: 'http://puu.sh/oXDO9/3c169032d0.jpg'}
]

// 必須要放在外面，不然每次重新渲染的時候PureCat 都會被重刷..
const PureCat = memo(Cat)
function CatList() {
  const [list, setList] = useState(teamRwby)

  const newCat = () => setList(list => [{ name: v4() }, ...list])

  return (
    <>
      <button onClick={newCat}>add new cat</button>
      {list.map(cat => <PureCat {...cat} key={cat.name} />)}
    </>
  )
}

export default CatList
