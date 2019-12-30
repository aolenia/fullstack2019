import React, { useState, useEffect } from 'react'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([])

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])
  console.log('render', persons.length, 'notes')


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