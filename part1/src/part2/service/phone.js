import axios from "axios";

const baseUrl = "http://localhost:3001/persons";

const getAll = () => {
    return axios.get(baseUrl).then(res => res.data);
}

const create = newObject => {
    return axios.post(baseUrl, newObject).then(res => res.data);
}

const update = (id, newObject) => {
    return axios.put(`${baseUrl}/${id}`, newObject).then(res => res.data)
        .catch(err => {
            console.log(`update error, err:${err}`);
            alert(
                `update error`
            )
        })
}

const deleteById = (id) => {
    return axios.delete(`${baseUrl}/${id}`)
        .then(res => res.data)
        .catch(err => {
            alert(
                `delete error : ${err}`
            );
        })
}

// export default {
//     getAll: getAll,
//     create: create,
//     update: update
// }

// 更紧凑点的定义
export default {getAll, create, update}
