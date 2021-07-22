import { useInput } from '../customHook/hooks'

function SearchForm(props) {

  const { onSubmit = f => f, reset = false } = props
  const [loginProps, resetLogin] = useInput('yayayahahaha')

  function onClick() {
    onSubmit(loginProps.value)
    reset && resetLogin()
  }

  return (
    <p>
      <input
        type="text" {...loginProps}
        placeholder="input github account"
        onKeyDown={(e) => e.key ==='Enter' && onClick()}
      />
      <button onClick={onClick}>submit</button>
    </p>
  )
}

export default SearchForm
