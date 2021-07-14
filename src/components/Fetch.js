import { useFetch } from '../customHook/hooks'

function Fetch(props) {
  const {
    url = null,
    renderSuccess,
    renderLoading = f => <p>Now Loading~!</p>,
    renderError = e => <pre>{JSON.stringify(e, null, 2)}</pre>
  } = props
  const { data, loading, error } = useFetch(url)
  if (loading) return renderLoading()
  if (error) return renderError(error)
  if (data) return renderSuccess(data)

  return <div></div>
}

export default Fetch
