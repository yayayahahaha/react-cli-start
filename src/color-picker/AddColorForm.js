import { useInput } from '../customHook/hooks'
import { useColors } from '../provider/ColorProvider.js'

function AddColorForm(props) {
  const {
    addColor = Function.prototype
  } = useColors()

  const [titleProps, resetTitle] = useInput('')
  const [colorProps, resetColor] = useInput('#FF0063')

  const submit = function(e) {
    e.preventDefault()
    const { value: title } = titleProps
    const { value: color } = colorProps

    addColor({ title, color })
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
