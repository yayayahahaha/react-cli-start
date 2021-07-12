import { useState } from 'react'

export const useInput = (originalValue) => {
  const [value, setValue] = useState(originalValue)

  const onChange = e => setValue(e.target.value)

  return [
    { value, onChange }, // default value and onChanged handle
    () => setValue(originalValue) // reset function
  ]
}
