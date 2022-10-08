import ITodo from '../../interfaces/ITodo'
import './Todo.css'
import CSS from 'csstype'

const enabled: CSS.Properties = {
    backgroundColor: '#23DC3D',
}

const disabled: CSS.Properties = {
    backgroundColor: '#DB0F13',
}

interface todoElement {
    toggle: (todo: ITodo) => void
    remove: (todo: ITodo) => void
    todo: ITodo
}

function Todo({ toggle, remove, todo }: todoElement) {
    return (
        <li className="todo" style={todo.state ? enabled : disabled}>
            <p>{todo.name}</p>
            <button onClick={() => toggle(todo)}>v</button>
            <button onClick={() => remove(todo)}>x</button>
        </li>
    )
}

export default Todo
