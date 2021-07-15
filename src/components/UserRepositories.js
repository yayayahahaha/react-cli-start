import RepoMenu from './RepoMenu'
import Fetch from './Fetch'

function UserRepositories(props) {
  const {
    login = 'yayayahahaha',
    selectedRepo,
    onSelect = f => f
  } = props
  const url = `https://api.github.com/users/${login}/repos`
  const renderSuccess = data => <RepoMenu repositories={data} onSelect={onSelect} />
  // const renderSuccess = data => <>{data.map(item => <p key={item.id}>{item.name}</p> )}</>
  const renderLoading = f => <div>Loading for UserRepositories</div>

  const fetchProps = { url, renderSuccess, renderLoading }

  return (
    <Fetch
      {...fetchProps}
    />
  )
}

export default UserRepositories
