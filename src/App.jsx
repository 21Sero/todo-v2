import { useReducer } from 'react'
import './App.scss'
import TodoForm from './components/TodoForm/TodoForm'
import TodoList from './components/TodoList/TodoList'
import { initiacValue, reducer } from './hook/reducer'

function App() {
	const [state, dispatch] = useReducer(reducer, initiacValue)

	return (
		<main className='main'>
			<TodoForm dispatch={dispatch} />
			<TodoList Todos={state} dispatch={dispatch} />
		</main>
	)
}

export default App
