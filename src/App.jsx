import { useReducer } from 'react'
import './App.scss'
import TodoForm from './components/TodoForm/TodoForm'
import TodoList from './components/TodoList/TodoList'
import { initiacValue, reducer } from './hook/reducer'
import GithubBtn from "./components/githubBtn/GithubBtn.jsx";


function App() {
	const [state, dispatch] = useReducer(reducer, initiacValue)

	return (
		<main className='main'>
			<GithubBtn />
			<TodoForm dispatch={dispatch} />
			<TodoList Todos={state} dispatch={dispatch} />
		</main>
	)
}

export default App
