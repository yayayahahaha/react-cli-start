import { useFetch } from '../customHook/hooks'

function Fetch(props) {
  const {
    url = null,
    renderSuccess = data => <pre>{JSON.stringify(data, null, 2)}</pre>,
    renderLoading = f => <p>Now Loading~!</p>,
    renderError = e => <pre>default Error: {JSON.stringify(e, null, 2)}</pre>
  } = props

  const { data, loading, error } = useFetch(url)
  if (loading) return renderLoading()
  if (error) return renderError(error)
  if (data) return renderSuccess(data)

  return <></>
}

export default Fetch
