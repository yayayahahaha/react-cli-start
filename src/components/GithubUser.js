import Fetch from './Fetch'
import GithubUserDetail from './GithubUserDetail'
import UserRepositories from './UserRepositories'

function GithubUser(props) {
  const { login } = props

  const url = `https://api.github.com/users/${login}`
  const renderSuccess = (data) => <>
    <GithubUserDetail {...data} />
  </>

  return (
    <>
      <Fetch {...{url, renderSuccess}}></Fetch>
      <UserRepositories
        login={login}
        selectedRepo={1}
      />
    </>
  )
}

export default GithubUser
