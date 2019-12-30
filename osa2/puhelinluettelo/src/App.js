import React, { useState } from 'react'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber
    }
    if(persons.filter(person => person.name === newName).length > 0){
      window.alert(`${newName} is already added to phonebook`)
    }else{
      setPersons(persons.concat(personObject))
      setNewName('Add new name here')
      setNewNumber('Add new number here')
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <h3>  Add a new </h3>
      <PersonForm 
        newName={newName}
        newNumber={newNumber}
        handleNameChange={() => handleNameChange}
        handleNumberChange={() => handleNumberChange}
        addPerson={() => addPerson}
      />
      <h2>Numbers</h2>
      <div>
        <Persons persons={persons} />
      </div>
    </div>
  )

}

export default App