import { useInput } from '../customHook/hooks'

function AddColorForm(props) {
  const {
    onNewColor = Function.prototype,
    defaultColor = '#FF0063'
  } = props

  const [titleProps, resetTitle] = useInput('')
  const [colorProps, resetColor] = useInput(defaultColor)

  const submit = function(e) {
    e.preventDefault()
    const { value: title } = titleProps
    const { value: color } = colorProps

    onNewColor({ title, color })
    resetTitle()
    resetColor()
  }

  return (
    <form onSubmit={submit}>
      <input
        type="text"
        placeholder="color title..."

        {...titleProps}
      />
      <input
        type="color"
        {...colorProps}
      />
      <button>Add Color</button>
    </form>
  )
}

export default AddColorForm
