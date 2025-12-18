import { useState } from 'react'


const Statistics = ({good, neutral, bad}) => {
  
  const all = good + neutral + bad
  const average = (good - bad) / all
  const positive = (good / all) * 100
  if (all === 0) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  }
  if (all > 0) {
    return (
      <div>
        <table>
        <tr><td>good </td><td> {good}</td></tr>
        <tr><td>neutral </td><td> {neutral}</td></tr>
        <tr><td>bad </td><td> {bad}</td></tr>
        <tr><td>all </td><td> {all}</td></tr>
        <tr><td>average </td><td> {average}</td></tr>
        <tr><td>positive </td><td> {positive} %</td></tr>
        </table>
      </div>
    )
  }
  
}
const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>



const App = () => {
  const [neutral, setneutral] = useState(0)
  const [good, setgood] = useState(0)
  const [bad, setbad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={() => setgood(good + 1)} text="good" />
      <Button onClick={() => setneutral(neutral + 1)} text="neutral" />
      <Button onClick={() => setbad(bad + 1)} text="bad" />
      

      <h1>statistics</h1>
   
      <Statistics good={good} neutral={neutral} bad={bad} />

    

   </div>
  )
}

export default App