function Agreement(props) {
  const { onAgree = f => f } = props

  return (
    <div>
      <h1>簽約</h1>
      <button onClick={() => onAgree(true)}>一起成為魔法少女吧</button>
    </div>
  )
}

export default Agreement
