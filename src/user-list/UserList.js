import { bigList } from './user-data'
import { FixedSizeList } from 'react-window'
import User from './User'

function UserList() {
  const renderRow = ({ index, style }) => {
    const { avatar, name, email } = bigList[index]
    return (
      <div style={{ ...style, display: 'flex' }} >
        <User {...{avatar, name, email}} />
      </div>
    )
  }

  return (
    <FixedSizeList
      height={window.innerHeight}
      width={window.innerWidth - 20}
      itemCount={bigList.length}
      itemSize={150}
    >
      {renderRow}
    </FixedSizeList>
  )
}

export default UserList
