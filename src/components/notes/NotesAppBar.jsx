import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startSaveNote } from '../../action/notes'

export const NotesAppBar = () => {

  const dispatch = useDispatch()
  const {active} = useSelector(state => state.notesReducer)
  const handelSave = () => {
    
    dispatch(startSaveNote(active))
  }

  
  return (
    <div className='notes__appbar'>
        <span>28 de agosto 2022</span>
        <div>
            
            <button className='btn' onClick={handelSave}>Save</button>

        </div>
    </div>
  )
}
