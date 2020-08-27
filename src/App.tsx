import React, {useState} from 'react';
import './App.css';
import Todolist from "./Todolist";

export type FilterType = 'all' | 'active' | 'completed'

function App() {

    let [tasks, setTasks] = useState([
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "SQL", isDone: true},
        {id: 4, title: "Bootstrap", isDone: false},
        {id: 5, title: "VUE", isDone: false},
        {id: 6, title: "Angular", isDone: true},
        {id: 7, title: "Php", isDone: false},
    ])


    function removeTask(id: number) {
        setTasks(tasks.filter(f => f.id !== id))
    }

    let [filter, setFilter] = useState<FilterType>('all')
    let taskForTodoList = tasks

    if (filter === 'active') {
        taskForTodoList = tasks.filter(f => !f.isDone)
    } else if( filter === 'completed'){
        taskForTodoList = tasks.filter(f => f.isDone)
    }

    function changeFilter(value:FilterType) {
        setFilter(value)
    }

    return (
        <div className="App">
            <Todolist title="What to learn" tasks={taskForTodoList} removeTask={removeTask} changeFilter={changeFilter}/>

        </div>
    );
}

export default App;
