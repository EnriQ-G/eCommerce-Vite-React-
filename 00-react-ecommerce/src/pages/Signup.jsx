import { useNavigate } from 'react-router-dom'
import React from 'react'
import useForm from '../hooks/useForm'
import { registerUserService } from '../services/useServices'

const Signup = () => {
  const navigate = useNavigate()
  const sendData = async (data) => {
    try {
      const response = await registerUserService(data)
      if (response.status === 201) {
        navigate('/')
        console.log('Usuario creado correctamente', response.data)
      }
    } catch (error) {
      console.error(error)
    }
  }
  const { input, handleSubmit, handleInputChange } = useForm(sendData, {
    first_name: '',
    last_name: '',
    gender: '',
    email: '',
    password: ''

  })
  return (

    <main className='form-signin w-100 m-auto'>
      <form onSubmit={handleSubmit}>
        <label htmlFor='first_name'>First Name</label>
        <input type='text' className='form-control' name='first_name' id='first_name' value={input.first_name} onChange={handleInputChange} />
        <label htmlFor='last_name'>Last Name</label>
        <input type='text' className='form-control' name='last_name' id='last_name' value={input.last_name} onChange={handleInputChange} />
        <label htmlFor='gender'>Gender</label>
        <input type='text' className='form-control' name='gender' id='gender' value={input.gender} onChange={handleInputChange} />
        <label htmlFor='email'>Email</label>
        <input type='email' className='form-control' name='email' id='email' value={input.email} onChange={handleInputChange} />
        <label htmlFor='password'>Password</label>
        <input type='password' className='form-control' name='password' id='password' value={input.password} onChange={handleInputChange} />
        <button type='submit'>Sign up</button>

      </form>
    </main>
  )
}

export default Signup
