import { useState } from 'react'

function AddColorForm(props) {
  const {
    onNewColor = Function.prototype,
    defaultColor = '#FF0063'
  } = props

  const [title, setTitle] = useState('')
  const [color, setColor] = useState(defaultColor)

  const submit = function(e) {
    e.preventDefault()

    onNewColor({ title, color })
    setTitle('')
    setColor(defaultColor)
  }

  return (
    <form onSubmit={submit}>
      <input
        type="text"
        placeholder="color title..."
        value={title}
        onChange={ e => setTitle(e.target.value) }
      />
      <input
        type="color"
        value={color}
        onChange={ e => setColor(e.target.value) }
      />
      <button>Add Color</button>
    </form>
  )
}

export default AddColorForm
