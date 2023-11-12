const Course = () => {
    const courses = [
        {
            name: 'Half Stack application development',
            id: 1,
            parts: [
                {
                    name: 'Fundamentals of React',
                    exercises: 10,
                    id: 1
                },
                {
                    name: 'Using props to pass data',
                    exercises: 7,
                    id: 2
                },
                {
                    name: 'State of a component',
                    exercises: 14,
                    id: 3
                },
                {
                    name: 'Redux',
                    exercises: 11,
                    id: 4
                }
            ]
        },
        {
            name: 'Node.js',
            id: 2,
            parts: [
                {
                    name: 'Routing',
                    exercises: 3,
                    id: 1
                },
                {
                    name: 'Middlewares',
                    exercises: 7,
                    id: 2
                }
            ]
        }
    ]

    return (
        <div>
            <h1>Web development curriculum</h1>
            {courses.map(course => (<Lesson lesson={course} />))}
        </div>
    )
}

const Parts = ({parts}) => {
    return (
        <div>
            {parts.map(part => (<p>{part.name} {part.exercises}</p>))}
        </div>
    )
}

const Statistic = ({parts}) => {
    return (
        <div>
            <h3>total of {parts.reduce((total, cur) => total + cur.exercises, 0)} exercises</h3>
        </div>
    )
}

const Lesson = ({lesson}) => {
    return (
        <div>
            <h2>{lesson.name}</h2>
            <Parts parts={lesson.parts}/>
            <Statistic parts={lesson.parts}/>
        </div>
    )
}


export default Course;
