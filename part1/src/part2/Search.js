import {useState} from "react";

const Search = ({persons}) => {
    const [key, setKey] = useState("");
    const [res, setRes] = useState([]);

    const handleSearch = (e) => {
        let input = e.target.value.toLowerCase();
        console.log(`input is ${input}`)
        console.log(`key is before${key}`)
        // setKey gpt 说是异步的，不会立即执行，要用 e.target.value比对
        setKey(input);
        console.log(`key is now ${key}`)
        let filtered = input ? persons.filter(per => per.name.toLowerCase().startsWith(input)) : []
        console.log('filtered:', filtered)
        setRes(filtered);
    }

    return (
        <div>
            <div>
                filter shown with<input value={key} onChange={handleSearch}/>
            </div>
            <div>
                {res.map(per => <div key={per.id}>{per.name}:{per.number}</div>)}
            </div>
        </div>
    )
}

export default Search;

