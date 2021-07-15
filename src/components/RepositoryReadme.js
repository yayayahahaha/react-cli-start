import { loadReadme } from '../utils/index'
import ReactMarkdown from 'react-markdown'
import { useState, useCallback, useEffect } from 'react'

// rename
const loadReadmeFunc = loadReadme

function RepositoryReadme(props) {
  const { repo, login } = props

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState()
  const [markdown, setMarkdown] = useState('')

  const loadReadme = useCallback(async(login, repo) => {
    setLoading(true)
    const [markdown, error] = await loadReadmeFunc(login, repo).then(r => [r, null]).catch(e => [null, e])
    if (error) throw error
    setMarkdown(markdown)
    setLoading(false)
  }, [])

  useEffect(() => {
    if (!repo || !login) return
    setError(undefined)

    loadReadme(login, repo).catch((error) => {
      setError(error.message)
    })
  }, [repo, login, loadReadme])

  if (error) return <pre>{typeof error === 'string' ? error : JSON.stringify(error, null, 2)}</pre>
  if (loading) return <p>Loading RepositoryReadme...</p>

  return <ReactMarkdown>{markdown}</ReactMarkdown>
  // return <ReactMarkdown source={markdown} />
}

export default RepositoryReadme
