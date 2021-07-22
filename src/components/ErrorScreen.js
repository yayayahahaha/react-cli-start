function ErrorScreen(props) {
  const { error } = props

  if (error) {
    console.error('in ErrorScreen: ', error.message)
  }

  return <div style={{ backgroundColor: 'red', color: 'white' }}>
    <h1>Error</h1>
    <p>{error.message}</p>
  </div>
}

export default ErrorScreen
