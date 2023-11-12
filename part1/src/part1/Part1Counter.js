import {useState} from "react";

const Part1Counter = () => {
    const [counter, setCounter] = useState(0);

    const handleClick = () => {
        console.log('clicked');
    }

    function increaseByOne() {
        return () => setCounter(counter + 1);
    }

    const increase = () => setCounter(counter + 1);
    const resetZero = () => setCounter(0);

    function setToZero() {
        return () => setCounter(0);
    }

    return (
        <div>
            <div>{counter}</div>
            <button onClick={increaseByOne()}>
                plus 函数执行
            </button>
            <button onClick={setToZero()}>
                reset 函数执行
            </button>
            <button onClick={increase}>
                plus 函数表达式
            </button>
            <button onClick={resetZero}>
                reset 函数表达式
            </button>
        </div>
    )
}

export default Part1Counter;
