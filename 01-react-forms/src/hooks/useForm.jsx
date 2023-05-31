// Un custom hook es una función que utiliza otros hooks de react para realizar una funcionalidad
// -- Reglas para crear un custom  hook:
// 1. Siempre debe ser usar la palabra 'use' al inicio de su nombre
// 2. Siempre debe ser una función
// 3. Siempre debe usar al menos un hook de react
// 4. No debe ser llamado dentro de un loop, condicional o funcion anidada
// 5. Deben ser reutilizables, NO para casos especificos

import { useState } from 'react'

function useForm (callback, defaults) {
  const [input, setInput] = useState(defaults)

  const handleSubmit = (event) => {
    event.preventDefault()
    callback(input)
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setInput({ ...input, [name]: value })
  }

  return {
    input,
    handleSubmit,
    handleInputChange
  }
}

export default useForm
