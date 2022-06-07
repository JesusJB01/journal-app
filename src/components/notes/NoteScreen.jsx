import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { activeNote, startDeleting } from '../../action/notes'
import { useForm } from '../../hooks/useForm'
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {
  
  // cambia el estado de las notas
  const {active:note}= useSelector(state => state.notesReducer)
  const [formValues, handleInputChange, reset] = useForm(note)
  const {body, title, id} = formValues;
  // apunta a las notas, no tiene que redibujar todo el componente si cambia el estado
  const activeId = useRef(note.id)
  const dispatch = useDispatch()

  useEffect(() => {
    if (note.id !== activeId.current) {
      reset(note)
      activeId.current = note.id
    }
  }, [note, reset])

  useEffect(() => {
    dispatch(activeNote(formValues,{ ...formValues}))
  }, [formValues, dispatch])

  const handelDelete = () => {
    dispatch(startDeleting(id))
  }

  return (
    <div className='notes__main-content'>

        <NotesAppBar/>
        
        <div className='notes__content'>
            <input
            type="text"
            placeholder='Some awesome title'
            className='notes__title-input'
            autoComplete='off'
            value = {title}
            onChange={handleInputChange}
            name = 'title'
            />

            <textarea placeholder='Que paso hoy?' 
            className='notes__textarea' 
            value = {body}
            onChange={handleInputChange}
            name = 'body'
            >

            </textarea>

           { 
            (note.url) 
            && (
              <div className='notes__image'>
                    <img
                    src="https://i2.wp.com/jalacoste.com/wp-content/uploads/2020/04/hiking-sunset-sun-3775075.jpg?resize=385%2C300&ssl=1"
                    alt="imagen"
                    />
                </div>
            )
            }
        </div>

        <button className='btn btn-danger'
        onClick={handelDelete}
        >
            Delete
        </button>
    </div>
  )
}
