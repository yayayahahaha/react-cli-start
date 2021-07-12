import { useRef } from 'react'

function AddColorForm(props) {
  const {
    onNewColor = Function.prototype
  } = props

  const textTitle = useRef()
  const hexColor = useRef()

  const submit = function(e) {
    e.preventDefault()

    const title = textTitle.current.value
    const color = hexColor.current.value

    textTitle.current.value = ''
    hexColor.current.value = ''

    onNewColor({ title, color })
  }

  return (
    <form onSubmit={submit}>
      <input ref={textTitle} type="text" placeholder="color title..." />
      <input ref={hexColor} type="color" />
      <button>Add Color</button>
    </form>
  )
}

export default AddColorForm
