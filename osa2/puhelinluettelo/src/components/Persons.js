import React from 'react'
import Person from './Person'

const Persons = ({ persons }) => {

    const rows = () => persons.map(person => 
        <Person
          person={person}
          key={person.name}
        />
      )

    return(
        <div> {rows()} </div>
    )
        
}

export default Persons