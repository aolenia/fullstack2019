import React from 'react'
import Person from './Person'

const Persons = ({ persons,deletePersonWithName }) => {

    const rows = () => persons.map(person => 
        <Person
          person={person}
          key={person.name}
          deletePerson={() => deletePersonWithName(person.name)}
        />
      )

    return(
        <div> {rows()} </div>
    )
        
}

export default Persons