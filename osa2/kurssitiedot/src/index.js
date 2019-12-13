import React from 'react'
import ReactDOM from 'react-dom'

const Header = ({name}) => {
  console.log('header')
    return(<h1>{name}</h1>
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

const Total = ({parts}) => {
/*
  const totalAmmount = parts.reduce(function(sum, part){
    console.log('i dont know', sum, part.exercises)
    return sum + part.exercises
  },0)*/

    const total1 = parts.reduce((sum, part) => console.log('DEBUG', sum, part.exercises) || sum + part.exercises,0)    
    return(<h4> Number of exercises {total1} </h4>
    )
}

const Course = ({name, parts}) => {
  console.log('heiheo', name, parts)
  return (
    <div>
      <Header name={name} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

const Courses = ({courses}) => {
  console.log('courses', courses)

  const coursesList = () => courses.map(x =>
      <Course 
        name = {x.name}
        parts = {x.parts}
      />
    )

    

  return (
    <div>
      <ul>
      {coursesList()}
      </ul>
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
  const courses = [
    {
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
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      <Courses courses={courses} />
    </div>
  )
}


ReactDOM.render(<App />, document.getElementById('root'))