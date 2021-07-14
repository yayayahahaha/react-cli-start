import { useFetch } from '../customHook/hooks'

function GithubUser(props) {
  const { login } = props
  const url = `https://api.github.com/users/${login}`
  const { loading, data, error } = useFetch(url)

  if (loading) return <div>loading...</div>
  if (error) return <div style={{ color: 'red' }}>error~!</div>
  if (!data) return <div>Initing...</div>

  return (
    <div className="githubUser">
      {data.login}
    </div>
  )
}

export default GithubUser
