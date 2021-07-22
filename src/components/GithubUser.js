import Fetch from './Fetch'
import GithubUserDetail from './GithubUserDetail'
import SearchForm from './SearchForm'

import RepoMenu from './RepoMenu'
import RepositoryReadme from './RepositoryReadme'

import { useState, useCallback, useEffect } from 'react'
import { useFetchConfig } from '../customHook/hooks'

function GithubUser(props) {
  const [login, setLogin] = useState(() => '')
  const [repo, setRepo] = useState('')
  const onSelect = useCallback(repo => {
    console.log('on selected')
    setRepo(repo)
  }, [setRepo])

  const [url_userDetail, loginChanged_detail] = useFetchConfig('detail')
  const renderUserDetailSuccess = (data) => <>
    <GithubUserDetail {...data} />
  </>

  const [url_userRepositories, loginChanged_repositories] = useFetchConfig('repositories')
  const renderUserRepositoriesSuccess = (data) => <>
    {login && <RepoMenu
      repositories={data}
      onSelect={onSelect}
      login={login}
      selectedRepo={1}
    />}
    {login && repo && <RepositoryReadme {...{login, repo}} />}
  </>

  function onSubmit(value) {
    setLogin(value)
    setRepo('')
    // loginChanged_detail(value)
    // loginChanged_repositories(value)
  }
  useEffect(() => {
    console.log('in useEffect login', login)

    loginChanged_detail(login)
    loginChanged_repositories(login)
  }, [login, loginChanged_detail, loginChanged_repositories])


  return (
    <>
      <SearchForm onSubmit={onSubmit} />
      {!login && <div>Please input something</div>}
      {
        login && <>
          <Fetch {...{url: url_userDetail, renderSuccess: renderUserDetailSuccess}}></Fetch>
          <Fetch {...{url: url_userRepositories, renderSuccess: renderUserRepositoriesSuccess}}></Fetch>
        </>
      }
    </>
  )
}

export default GithubUser
