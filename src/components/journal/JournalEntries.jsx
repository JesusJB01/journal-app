import React from 'react'
import { useSelector } from 'react-redux'
import { JorunalEntry } from './JorunalEntry'

export const JournalEntries = () => {
const {notes} = useSelector(state => state.notesReducer)



  return (
    <div className='journal__entries'>
         {
            notes.map( notes => (
                <JorunalEntry key={notes.id} {...notes}/>
            ))
        } 
    </div>
  )
}
