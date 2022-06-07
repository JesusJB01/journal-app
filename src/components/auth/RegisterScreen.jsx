import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import validator  from 'validator'
import { useDispatch, useSelector } from 'react-redux'
import { setError, removeError } from '../../action/ui'
import { startRegisterWithEmailAndPassword } from '../../action/auth'

export const RegisterScreen = () => {

  const dispatch = useDispatch();
  const  {msgError} = useSelector(state => state.ui);
  
  
  

  const [formValues, handleInputChange] = useForm({
    name: 'Jonh Don',
    email: 'Example@gmail.com',
    password: '',
    password2: ''
  })

  const { name, email, password, password2 } = formValues;

  const handleRegister = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      dispatch(startRegisterWithEmailAndPassword(email, password, name));
      console.log('form valido');
    }
  }

  const isFormValid = () => {
    if (name.trim().length === 0) {
      dispatch(setError('Name is required'))
      return false;
    } else if (!validator.isEmail(email)) {
      dispatch(setError('Email is invalid'))
      return false;
    }else if (password !== password2 || password.length < 5) {
      dispatch(setError('Password is invalid'))
      return false;
    }
    dispatch(removeError())
    return true;
  }

  return (
    <>
         <h3 className='auth__title'>Register</h3>


<form onSubmit={handleRegister}>

  {
    msgError && (
    <div className='auth__error'>
      {msgError}
    </div>
    )
  } 

<input 
      type="text"
      value={name}
      placeholder='Name'
      name="name"
      autoComplete='off'
      className= "auth__input"
      onChange={handleInputChange}

      />
      <input 
      type="text"
      value={email}
      placeholder='Email'
      name="email"
      autoComplete='off'
      className= "auth__input"
      onChange={handleInputChange}

      />

      <input 
      type="password"
      value={password}
      placeholder='Password'
      name="password"
      autoComplete='off'
      className='auth__input'
      onChange={handleInputChange}
      />

      <input 
      type="password"
      value={password2}
      placeholder='Confirm Password'
      name="password2"
      autoComplete='off'
      className='auth__input'
      onChange={handleInputChange}
      />


      <button
      className='btn btn-primary btn-block mb-5'
      type='submit'
      >
        Registrarse
      </button>

     
      <Link to="/auth/login" className='link'>
        Registro
      </Link>
</form>

    </>
  )
}
