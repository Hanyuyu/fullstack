import {useEffect, useState} from "react";
import axios from "axios";
import CommonSearch from "./CommonSearch";

const Contries = () => {
    const [contries, setContries] = useState([]);
    const [detailOne, setDetailOne] = useState((<div></div>));

    useEffect(() => {
        axios.get("https://restcountries.com/v3.1/all")
            .then(res => {
                setContries(res.data);
            })
    }, []);

    // 匹配方式
    const matchContries = (oriData, input) => {
        return oriData.name.common.toLowerCase().includes(input.toLowerCase())
    }

    const renderOne = (contry) => {
        return (
            <div>
                <h1>{contry.name.common}</h1>
                <div>capital: {contry.capital}</div>
                <div>area: {contry.area}</div>
                <h2>languages:</h2>
                <ul>
                    {Object.values(contry.languages).map(lan => <li>{lan}</li>)}
                </ul>
                <br/>
                <img src={contry.coatOfArms.svg} width={500} height={500}/>
            </div>
        )
    }


    // 渲染方式
    const renderRes = (res) => {
        console.log(`searchRes is ${res.map(o => o.name.common)}`)
        if(res.length > 10){
            return "Too many matches,specify another filter";
        }

        if(res.length === 1){
            let contry = res[0];

            console.log(`languages`, contry.languages)
            return renderOne(contry);
            // return (
            //     <div>
            //         <h1>{contry.name.common}</h1>
            //         <div>capital: {contry.capital}</div>
            //         <div>area: {contry.area}</div>
            //         <h2>languages:</h2>
            //         {Object.values(contry.languages)}
            //         <br/>
            //         <img src={contry.coatOfArms.svg} width={500} height={500}/>
            //     </div>
            // )
        }

        return (
            <div>
                <div>
                    {
                        res.map(o => {
                            return (
                                <div>
                                    {o.name.common}
                                    <button onClick={() => setDetailOne(renderOne(o))}>show</button>
                                </div>
                            )
                        })
                    }
                </div>
                <div>
                    {detailOne}
                </div>
            </div>
        )
    }

    const resetOne = () => {
        console.log('resetOne')
        setDetailOne((<div></div>));
    }

    return (
        <div>
            <CommonSearch oriData={contries} findText={"find contries"} matchRule={matchContries} resView={renderRes} inputChange={resetOne}/>
        </div>
    )
}

export default Contries;
