import React, { useState, useEffect } from 'react'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  useEffect(() => {
    console.log('effect')
    personService
      .getAll()
      .then(startPersons => {
        console.log('promise fulfilled')
        setPersons(startPersons)
      })
  }, [])
  console.log('render', persons.length, 'notes')

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
      personService
        .create(personObject)
        .then(returnedPersons => {
          console.log(returnedPersons)
          setPersons(persons.concat(returnedPersons))
          setNewName('')
          setNewNumber('')
        }) 
    }
  }

  const deletePersonWithName = name => {
    const person = persons.find(person => person.name === name)
    console.log(' DEBUG delete with name: ' + name)
    console.log('Debug, delete with id: ', person.id)
    const result = window.confirm(`Are you sure that you want to delete ${name}`)
    console.log(result)
    if(result){
      personService
      .deleteRequest(person.id)
      .then()
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
        <Persons 
        persons={persons} 
        deletePersonWithName={deletePersonWithName}
        />
      </div>
    </div>
  )

}

export default App