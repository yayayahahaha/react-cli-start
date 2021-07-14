function GithubUserDetail(props) {
  const { avatar_url, login, name, location } = props
  console.log(JSON.stringify(props, null, 2))

  return (
    <div>
      <img src={avatar_url} alt={login} style={{ width: 200 }} />
      <div>
        <h1>login</h1>
        {name && <p>name</p>}
        {location && <p>location</p>}
      </div>
    </div>
  )
}

export default GithubUserDetail
