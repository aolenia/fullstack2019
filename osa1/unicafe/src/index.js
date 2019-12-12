import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ onClick, text}) => (
<button onClick={onClick}>
  {text}
</button>
)

const Average = (props) => {
    const calculateAverage = () => {
        let average = (props.good - props.bad)/(props.all)
        console.log('average: ', average)
      return average
    }
    if(props.all === 0){
        return (
          <div>
            average {props.all}
          </div>
        )
        
    }

    return (
      <div>
        average {calculateAverage()}
      </div>
    )
}

const Positive = ({good, all}) => {
    console.log('good', good)
    console.log('all ', all)

    if(all === 0){
        return (
            <div>
                positive {all * 100} %
            </div>    
        )
    }
    return (
        <div>
            positive {(good/all) * 100} %
        </div>
        
    )
}

const Statistic = ({text, value}) => {
    return(
        <div>{text} {value}</div>
    )
}

const Statistics = ({bad, good, all, neutral}) => {

    if(all === 0){
        return (
            <div>No feedback given</div>
        )
    }
    
    return (
        <div>
          <Statistic text="good" value={good} />
          <Statistic text="neutral" value={neutral} />
          <Statistic text="bad" value={bad} />
          <Statistic text="all" value={all} />
          <Average bad={bad} all={all} good={good} />
          <Positive good={good} all={all} />
        </div>
    ) 
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)

  const handleBadClick = () => {
    setBad(bad + 1)
    setAll(all + 1)
  }
  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
    setAll(all + 1)
  }
  const handleGoodClick = () => {
    setGood(good + 1)
    setAll(all + 1)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button
        onClick={() => handleGoodClick(good + 1)}
        text='good'
      />
      <Button
        onClick={() => handleNeutralClick(neutral + 1)}
        text='neutral'
      />
      <Button
        onClick={() => handleBadClick(bad + 1)}
        text='bad'
      />
      <h1>statistics</h1>
      <Statistics bad={bad} all={all} good={good} neutral={neutral} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)