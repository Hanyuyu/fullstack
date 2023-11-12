
// 解构 3.0
const Hello = ({name, age}) => {

    // 解构 1.0
    // const name = props.name;
    // const age = props.age;

    // 解构 2.0
    //const {name, age} = props;

    // const bornYear = () => {
    //     const yearNow = new Date().getFullYear();
    //     return yearNow - age;
    // };

    const bornYear = () => new Date().getFullYear() - age;

    return (
        <div>
            <p>
                Hello {name}, you are {age} years old
            </p>
            <p>So you were probably born in {bornYear()}</p>
        </div>
    )
}


const Part1C = () => {
    const name = '嗯哈';
    const age = 24;

    return (
        <div>
            <h1>Greetings</h1>
            <Hello name='Maya' age={26 + 10}/>
            <Hello name={name} age={age}/>
        </div>
    )
}

export default Part1C
