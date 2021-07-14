function User(props) {
  const { avatar, name, email } = props

  return <>
    <img src={avatar} alt={name} />
    <p>{name}-{email}</p>
  </>
}

export default User
