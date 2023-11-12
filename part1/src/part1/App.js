const Header = (props) => (
    <>
        <h1>{props.courseName}</h1>
    </>
)

const Part = (props) => (
    <div>
        <p>{props.partName} {props.exNum}</p>
    </div>
)

const Content = ({parts}) => {
    const part1 = parts[0];
    const part2 = parts[1];
    const part3 = parts[2];
    return (
        <div>
            {/*<Part partName={part1.name} exNum={part1.exercises}/>*/}
            {/*<Part partName={part2.name} exNum={part2.exercises}/>*/}
            {/*<Part partName={part3.name} exNum={part3.exercises}/>*/}
            {
                parts.map(part => (<Part partName={part.name} exNum={part.exercises}/>))
            }
        </div>
    )
}

const Total = (props) => {
    let total = 0;
    props.parts.forEach(part => total += part.exercises);
    return (
        <div>
            <p>Numbers of exercises {total}</p>
        </div>
    )
}

const App = () => {
    const course = {
        name: 'Half Stack application development',
        parts: [
            {
                name: 'Fundamentals of React',
                exercises: 10
            },
            {
                name: 'Using props to pass data',
                exercises: 7
            },
            {
                name: 'State of a component',
                exercises: 14
            }
        ]
    }

    return (
        <div>
            <Header courseName={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </div>
    )
}

export default App
