import Fetch from './Fetch'
import GithubUserDetail from './GithubUserDetail'

function GithubUser(props) {
  const { login } = props

  const url = `https://api.github.com/users/${login}`
  const renderSuccess = GithubUserDetail

  return (
    <Fetch {...{url, renderSuccess}}></Fetch>
  )
}

export default GithubUser
