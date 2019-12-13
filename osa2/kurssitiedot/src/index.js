import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
    return(<h1>{props.course.name}</h1>
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
          <ul>
          {parties()}
          </ul>
        </div>
    )
}

const Part = (props) => {
    return(<p key={props.id}> {props.part} {props.amount} </p>
    )
}

const Total = (props) => {
    let sum = 0
    props.amount.forEach(element => {
        console.log(element.exercises)
        sum = sum + element.exercises
    });
    

    return(<p> Number of exercises {sum} </p>
    )
}

const Course = ({course}) => {
  return (
    <div>
      <Header course={course} />
      <Content parts={course.parts} />
    </div>
  )
}

/*
const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
        <Header course={course} />
        <Content parts={[part1, part2, part3]} exercises={[exercises1, exercises2,exercises3]} />
        <Total amount={exercises1 + exercises2 + exercises3} />
    </div>
  )
}
const App = () => {
    const course = 'Half Stack application development'
    const part1 = {
      name: 'Fundamentals of React',
      exercises: 10
    }
    const part2 = {
      name: 'Using props to pass data',
      exercises: 7
    }
    const part3 = {
      name: 'State of a component',
      exercises: 14
    }
  
  
    return (
        <div>
            <Header course={course} />
            <Content parts={[part1.name, part2.name, part3.name]} exercises={[part1.exercises, part2.exercises,part3.exercises]} />
            <Total amount={part1.exercises + part2.exercises + part3.exercises} />
        </div>
      )
  }
  
 const App = () => {
    const course = 'Half Stack application development'
    const parts = [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  
    return (
        <div>
        <Header course={course} />
        <Content parts={parts} />
        <Total amount={parts} />
    </div>
    )
  }
 */
const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Niin just',
        exercises: 1,
        id: 4
      },
      {
        name: 'Ninja school',
        exercises: 14,
        id: 5
      }
    ]
  }

  return (
    <div>
      <Course course={course} />
    </div>
  )
}


ReactDOM.render(<App />, document.getElementById('root'))