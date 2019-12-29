import React from 'react'

const Header = ({name}) => {
    console.log('header')
      return(<h2>{name}</h2>
      )
  }
  
  const Content = ({parts}) => {
    const parties =() => parts.map(x => 
      <Part 
        key={x.id}
        part={x.name} 
        amount={x.exercises}
       />
      )
  
      return(
          <div>
            {parties()}
          </div>
      )
  }
  
  const Part = (props) => {
      return(<p key={props.id}> {props.part} {props.amount} </p>
      )
  }
  
  const Total = ({parts}) => {
  /*
    const totalAmmount = parts.reduce(function(sum, part){
      console.log('i dont know', sum, part.exercises)
      return sum + part.exercises
    },0)*/
  
      const total1 = parts.reduce((sum, part) => console.log('DEBUG', sum, part.exercises) || sum + part.exercises,0)    
      return(<h4> total of {total1} exercises</h4>
      )
  }

const Course = ({name, parts}) => {
    console.log('On course: ', name, parts)
    return (
      <div>
        <Header name={name} />
        <Content parts={parts} />
        <Total parts={parts} />
      </div>
    )
  }

  export default Course