import Fetch from './Fetch'
import GithubUserDetail from './GithubUserDetail'
import UserRepositories from './UserRepositories'

import { useCallback } from 'react'

function GithubUser(props) {
  const { login } = props

  const  onSelect = useCallback((name) => {
    console.log(`name ${name} is selected! in GithubUserDetail component!`)
  }, [])

  const url = `https://api.github.com/users/${login}`
  const renderSuccess = (data) => <>
    <GithubUserDetail {...data} />
  </>

  return (
    <>
      <Fetch {...{url, renderSuccess}}></Fetch>
      <UserRepositories
        login={login}
        onSelect={onSelect}
        selectedRepo={1}
      />
    </>
  )
}

export default GithubUser
