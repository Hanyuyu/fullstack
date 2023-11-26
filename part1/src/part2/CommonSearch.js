/*
 通用的搜索组件，抽象三个数据
    1. 原始数据
    2. 匹配规则
    3. 渲染模式
 */
import {useState} from "react";

/**
 *
 * @param findText  搜索框文案
 * @param oriData   原始数据
 * @param matchRule 匹配规则
 * @param resView   结果渲染
 * @param inputChange   输入改变回调
 * @returns {JSX.Element}
 * @constructor
 */
const CommonSearch = ({findText, oriData, matchRule, resView, inputChange}) => {
    const [matchRes, setMatchRes] = useState([]);

    const handleChange = (e) => {
        let inputVal = e.target.value;
        setMatchRes(inputVal ? oriData.filter(data => matchRule(data, inputVal)) : []);
        inputChange();
    }

    return (
        <div>
            <div>
                {findText}<input onChange={handleChange}/>
            </div>
            {resView(matchRes)}
        </div>
    )
}

export default CommonSearch;
