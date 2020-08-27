import React from "react";
import {FilterType} from "./App";


type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (id: number) => void
    changeFilter: (value: FilterType) => void
}

type TaskType = {
    id: number
    isDone: boolean
    title: string
}

function Todolist(props: PropsType) {
    return <div>
        <h3>{props.title}</h3>
        <ul>
            {
                props.tasks.map(f => {
                    return (
                        <li key={f.id}><input type="checkbox" checked={f.isDone}/> <span>{f.title}</span>
                            <button onClick={() => props.removeTask(f.id)}> x</button>
                        </li>
                    )
                })
            }
        </ul>
        <button onClick={() => props.changeFilter('all')}>All</button>
        <button onClick={() => props.changeFilter('active')}>Active</button>
        <button onClick={() => props.changeFilter('completed')}>Completed</button>
    </div>
}

export default Todolist