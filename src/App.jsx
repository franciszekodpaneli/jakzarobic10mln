import { useState } from 'react'


const Szescsiedem = ({szesc}) => {
  if (szesc > 6.7) {
    return (
      <div
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          border: "none",
          padding: "20px",
          backgroundColor: "white"
        }}
      >
        <img src="sigma.webp" alt="sigma" />
      </div>
    )
  }
  }


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
  const [selected, setSelected] = useState(0)
  const [szesc, setsiedem] = useState(0)


  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    '67',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
    const [votes, setVotes] = useState(Array(anecdotes.length))
    
  const vote = () => {
    const copy = [...votes]     
    copy[selected] += 1            
    setVotes(copy)        
  }


  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={() => setgood(good + 1)} text="good" />
      <Button onClick={() => setneutral(neutral + 1)} text="neutral" />
      <Button onClick={() => setbad(bad + 1)} text="bad" />
      

      <h1>statistics</h1>
   
      <Statistics good={good} neutral={neutral} bad={bad} />
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <p>has {votes[selected]} votes</p>
      <button onClick={vote}>vote</button>
      <p><Button onClick={() => setSelected((selected + 1) % anecdotes.length)}
        text="next anecdote" /></p>

      <h1>Anecdote with most votes</h1>
      {anecdotes[votes.indexOf(Math.max(...votes))]}

      <button style={{ border: "none", backgroundColor: "white", color: "black", padding: "8px 16px", cursor: "pointer", outline: "none",  position: "absolute", top: "10px", right: "10px", color: "white"}} 
      onClick={() => setsiedem(szesc + 1)}>67412167</button> 
      <Szescsiedem szesc={szesc} />

   </div>
  )
}

export default App