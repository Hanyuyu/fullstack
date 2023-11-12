import {useState} from "react";

/**
 * 学习各种函数的写法
 * @param counter
 * @returns {JSX.Element}
 * @constructor
 */
const Display = ({counter}) => (
    <div>
        {counter}
    </div>
)

const Button = ({btName, clickFunc}) => {
    return (
        <div>
            <button onClick={clickFunc}>
                {btName}
            </button>
        </div>
    )
}

const Counter = () => {
    const [counter, setCounter] = useState(0);

    const plus = () => setCounter(counter + 1);
    const reset = () => setCounter(0);

    function plus1() {
        return () => setCounter(counter + 1);
    }

    function reset0() {
        return () => setCounter(0);
    }

    function subVal(val) {
        return () => setCounter(counter - val);
    }



    const setToValue = (newVal) => () => {
        setCounter(newVal);
    }

    const setToValuec = (newVal) => {
        return () => setCounter(newVal)
    }


    return (
        <div>
            <Display counter={counter}/>
            <Button btName='plus-精简' clickFunc={() => setCounter(counter + 1)}/>
            <Button btName='Reset-精简' clickFunc={() => setCounter(0)}/>
            <br/>
            <Button btName='Plus-表达式' clickFunc={plus} />
            <Button btName='Reset-表达式' clickFunc={reset} />
            <br/>
            <Button btName='Plus-函数执行' clickFunc={plus1()}/>
            <Button btName='Reset-函数执行' clickFunc={reset0()}/>
            <Button btName='Plus5-return function' clickFunc={setToValue(counter + 5)}/>
            <Button btName='setTo100-return function' clickFunc={setToValue(100)}/>
            <Button btName='sub3 function' clickFunc={subVal(3)}/>
        </div>
    )
}

export default Counter;
