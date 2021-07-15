import RepoMenu from './RepoMenu'
import Fetch from './Fetch'
import { useState, useCallback } from 'react'

import RepositoryReadme from './RepositoryReadme'

function UserRepositories(props) {
  const {
    login = 'yayayahahaha',
    selectedRepo
  } = props

  const [repo, setRepo] = useState('')
  const onSelect = useCallback(repo => {
    setRepo(repo)
  }, [setRepo])

  const url = `https://api.github.com/users/${login}/repos`
  const renderSuccess = data => <>
      <RepoMenu
        repositories={data}
        onSelect={onSelect}
        login={login}
        selectedRepo={selectedRepo}
      />
      <RepositoryReadme {...{login, repo}} />
  </>

  const renderLoading = f => <div>Loading for UserRepositories</div>

  const fetchProps = { url, renderSuccess, renderLoading }

  return (
    <Fetch
      {...fetchProps}
    />
  )
}

export default UserRepositories
