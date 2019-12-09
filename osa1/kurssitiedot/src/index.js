import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
    return(
        <div>
            <h1>{props.course}</h1>
        </div>
    )
}

const Content = (props) => {
    return(
        <div>
            <Part part={props.parts[0]} amount={props.exercises[0]} />
            <Part part={props.parts[1]} amount={props.exercises[2]} />
            <Part part={props.parts[2]} amount={props.exercises[3]} />
        </div>
    )
}

const Part = (props) => {
    return(
        <div>
            <p> {props.part} {props.amount} </p>
        </div>
    )
}

const Total = (props) => {
    return(
        <div>
            <p> Number of exercises {props.amount} </p>
        </div>
    )
}


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

ReactDOM.render(<App />, document.getElementById('root'))