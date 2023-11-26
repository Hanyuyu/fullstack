import {useEffect, useState} from "react";
import Search from "./Search";
import axios from "axios";
import CommonSearch from "./CommonSearch";
import phoneService from "./service/phone"
import phone from "./service/phone";


const PhoneBook = () => {
    // 所有联系人
    const [persons, setPersons] = useState([])
    // 新增联系人
    const [newPerson, setNewPerson] = useState({name: "", number: ""})
    // 搜索
    const [refresh, setRefresh] = useState(true);

    const hook = () => {
        phone.getAll()
            .then(data => {
                setPersons(data);
            });
        setNewPerson({name: "", number: ""})
    }

    useEffect(hook, [refresh]);

    const addPerson = (e) => {
        e.preventDefault();

        let exits = persons.find(one => one.name === newPerson.name);
        if(exits){
            //alert(`${newPerson.name} : ${newPerson.number} is already added to phonebook`);
            if(window.confirm(`${newPerson.name} is already added to phonebook, replace the old number with a new one?`)){
                phoneService.update(exits.id, {...newPerson, id: exits.id})
            }
            // 刷新列表
            setRefresh(!refresh);
            return;
        }

        let newOne = {
            ...newPerson,
            id: persons.length + 1
        };

        phoneService.create(newOne)
            .then(res => {
                console.log(res);
            })

        setNewPerson({name: "", number: ""});
        setRefresh(!refresh);

    }

    // 匹配规则
    const matchPerson = (person, input) => {
        return person.name.toLowerCase().startsWith(input.toLowerCase())
        //return '/'+input+'/'.test(person.name)
    }

    // 渲染方式
    const resRender = (data)=>{
        return (
            <div>
                {data.map(p => <div>{p.name} : {p.number}</div>)}
            </div>
        )
    }

    return (
        <div>
            <h2>PhoneBook</h2>
            <form onSubmit={addPerson}>
                <div>
                    name: <input value={newPerson.name} onChange={(e) => {setNewPerson({...newPerson, name: e.target.value})}}/>
                </div>
                <div>
                    phone:<input value={newPerson.number} onChange={(e) => {setNewPerson({...newPerson, number: e.target.value})}}/>
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
            <Search persons={persons}/>
            <h2>Numbers</h2>
            <div>
                {persons.map(p => <div>{p.name} : {p.number}</div>)}
            </div>
            <CommonSearch findText={"找联系人"} oriData={persons} matchRule={matchPerson} resView={resRender}/>
        </div>
    )

}

export default PhoneBook;
