import { ChangeEvent, FormEvent, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import ITodo from './interfaces/ITodo'
import Todo from './components/todo/Todo'

function App() {
    const [todos, updateTodos] = useState<ITodo[]>([])
    const [inputTodo, setInputTodo] = useState('')

    const toggleTodo = (todo: ITodo) => {
        let copy = [...todos]
        todo.state = !todo.state
        copy[todos.indexOf(todo)] = todo
        updateTodos(copy)
    }

    const removeTodo = (todo: ITodo) => {
        let copy = [...todos]
        copy.splice(copy.indexOf(todo), 1)
        updateTodos(copy)
    }

    const handleChange = (event: ChangeEvent) => {
        let input = event.target as HTMLInputElement
        setInputTodo(input.value)
    }

    const addTodo = (event: FormEvent) => {
        event.preventDefault()
        let todo: ITodo = { name: inputTodo, state: false }
        updateTodos([...todos, todo])
        setInputTodo('')
    }

    return (
        <div className="App">
            <img src={reactLogo} />
            <h1>Todo app with React</h1>
            <ul>
                {todos.map((todo, index) => (
                    <Todo
                        key={index}
                        remove={removeTodo}
                        toggle={toggleTodo}
                        todo={todo}
                    />
                ))}
            </ul>
            <form onSubmit={addTodo}>
                <label>
                    Add todo :
                    <input
                        onChange={handleChange}
                        type="text"
                        value={inputTodo}
                    />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default App
