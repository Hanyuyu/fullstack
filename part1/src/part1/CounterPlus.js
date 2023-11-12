import {useState} from "react";

const History = ({clickActions}) => {
    if (clickActions.length === 0) {
        return (
            <div>
                the app is used by pressing the buttons
            </div>
        )
    }
    return (
        <div>
            button press history: {clickActions.join(' ')}
        </div>
    )
}

const CounterPlus = () => {
    const [click, setClick] = useState(
        {
            left : 0,
            right: 0
        }
    )
    const [clickActions, setClickActions] = useState([]);

    //console.log(clickActions.length);

    const plusLeft = () => {
        let newClick = {
            // 对象传播
            ...click,
            left: click.left + 1
        }
        setClick(newClick);
        setClickActions(clickActions.concat('left'));
    }

    const plusRight = () => {
        let newClick = {
            ...click,
            right: click.right + 1
        }
        setClick(newClick);
        setClickActions(clickActions.concat('right'));
    }

    //const resetAll = () => setClick({...click, right: 0, left: 0});
    const resetAll = () => {
        setClick({...click, right: 0, left: 0});
        setClickActions(clickActions.concat('reset'));
    }

    return (
        <div>
            <p>left : {click.left}  right : {click.right}</p>
            <button onClick={plusLeft}> plus left </button>
            <button onClick={plusRight}> plus right </button>
            <button onClick={resetAll}> reset all </button>
            {/*<History> allClicks={clickActions} </History>  易错点 参数要放在组件标签内部 */}
            <History clickActions={clickActions} />
        </div>
    )
}
export default CounterPlus;
