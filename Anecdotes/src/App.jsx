import { useState } from "react";

const Szescsiedem = ({ szesc }) => {
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
          backgroundColor: "white",
        }}
      >
        <img src="sigma.webp" alt="sigma" />
      </div>
    );
  }
  return null;
};

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>{text}</button>
);

const AnecdoteOfTheDay = ({ anecdote, votes, onVote, onNext }) => (
  <div>
    <h1>Anecdote of the day</h1>
    <p>{anecdote}</p>
    <p>has {votes} votes</p>
    <Button onClick={onVote} text="vote" />
    <Button onClick={onNext} text="next anecdote" />
  </div>
);

const AnecdoteWithTheMostVotes = ({ anecdotes, votes }) => {
  const maxVotes = Math.max(...votes);
  const bestIndex = votes.indexOf(maxVotes);

  return (
    <div>
      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[bestIndex]}</p>
      <p>has {maxVotes} votes</p>
    </div>
  );
};

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "67",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0));
  const [szesc, setSiedem] = useState(0);

  const vote = () => {
    const copy = [...votes];
    copy[selected] += 1;
    setVotes(copy);
  };

  const nextAnecdote = () =>
    setSelected((selected + 1) % anecdotes.length);

  return (
    <div>
      <AnecdoteOfTheDay
        anecdote={anecdotes[selected]}
        votes={votes[selected]}
        onVote={vote}
        onNext={nextAnecdote}
      />

      <AnecdoteWithTheMostVotes anecdotes={anecdotes} votes={votes} />

      <button
        style={{
          border: "none",
          backgroundColor: "white",
          padding: "8px 16px",
          cursor: "pointer",
          position: "absolute",
          top: "10px",
          right: "10px",
          color: "black",
        }}
        onClick={() => setSiedem(szesc + 1)}
      >
        67412167
      </button>

      <Szescsiedem szesc={szesc} />
    </div>
  );
};

export default App;
