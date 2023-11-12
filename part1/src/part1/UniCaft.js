import {useState} from "react";

// 反馈面板展示
const Statistics = ({scoreInfo}) => {
    if(scoreInfo.good === 0 && scoreInfo.neutral === 0 && scoreInfo.bad === 0){
        return (
            <div>
                <h2>statistics</h2>
                <p>No feedback given</p>
            </div>
        )
    }

    const goodScore = 1;
    const neutralScore = 0;
    const badScore = -1;

    let totalScore = scoreInfo.good * goodScore + scoreInfo.neutral * neutralScore + scoreInfo.bad * badScore;
    let totalVoteNum = scoreInfo.good + scoreInfo.neutral + scoreInfo.bad;

    return (
        <div>
            <h2>statistics</h2>
            <tr>
                <td>

                </td>
                <td>

                </td>
            </tr>
            <DateLine text='good' value={scoreInfo.good}/>
            <DateLine text='neutral' value={scoreInfo.neutral}/>
            <DateLine text='bad' value={scoreInfo.bad}/>
            <DateLine text='all' value={totalVoteNum}/>
            <DateLine text='average' value={totalScore/totalVoteNum}/>
            <DateLine text='positive' value={(scoreInfo.good / totalVoteNum)*100 + '%'}/>
        </div>
    )
}

const DateLine = ({text, value}) => {
    return (
        <tr>
            <td>{text}</td>
            <td>{value}</td>
        </tr>
    );
}

const Button = ({btName, clickAction}) => {
    return (
        <button onClick={clickAction}>{btName}</button>
    )
}


const UniCaft = () => {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);
    const [scoreInfo, setScoreInfo] = useState({
        good : 0,
        neutral: 0,
        bad : 0
    })

    return (
        <div>
            <h1>give feedback</h1>
            <Button btName='good' clickAction={() => setScoreInfo({...scoreInfo, good : scoreInfo.good + 1})}/>
            <Button btName='neutral' clickAction={() => setScoreInfo({...scoreInfo, neutral : scoreInfo.neutral + 1})}/>
            <Button btName='bad' clickAction={() => setScoreInfo({...scoreInfo, bad : scoreInfo.bad + 1})}/>
            <Statistics scoreInfo={scoreInfo}/>
        </div>
    )


}

export default UniCaft;
