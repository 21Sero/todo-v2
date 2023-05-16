import "./TodoList.scss"
import TodoItem from '../TodoItem/TodoItem'

export default function TodoList({ Todos, dispatch }) {
	return (
		<div className='list'>
			{
				Todos.map(todo => (
					<TodoItem key={todo.id} todo={todo} dispatch={dispatch} />
				))
			}
		</div>
	)
}
