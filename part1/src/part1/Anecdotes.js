import { useState } from 'react'

const Rank = ({anecdotes, points}) => {
    let top = 0;
    for(let i=0; i<points.length; i++){
        if(points[i] > points[top]){
            top = i;
        }
    }
    console.log('top index',top)

    return (
        <div>
            <h1>Anecdote with most votes</h1>
            <p>{anecdotes[top]}</p>
            <p>has {points[top]} votes</p>
        </div>
    )
}

const Anecdotes = () => {
    const anecdotes = [
        'If it hurts, do it more often',
        'Adding manpower to a late software project makes it later!',
        'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        'Premature optimization is the root of all evil.',
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
        'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
    ]

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; //不含最大值，含最小值
    }


    const [selected, setSelected] = useState(0)
    const [points, setPoints] = useState([0,0,0,0,0,0,0]);

    const vote = (item) => {
        let copy = [...points];
        copy[selected] += 1;
        setPoints(copy);
    }

    return (
        <div>
            {anecdotes[selected]}
            <br/>
            <p>has {points[selected]} votes</p>
            <button onClick={() => vote(selected)}>vote</button>
            <button onClick={() => setSelected(getRandomInt(0, 7))}>next anecdote</button>
            <Rank anecdotes={anecdotes} points={points}/>
        </div>
    )
}

export default Anecdotes;
