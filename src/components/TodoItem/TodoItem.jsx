import { RiDeleteBackLine } from "react-icons/ri";
import "./TodoItem.scss"

export default function TodoItem({ todo, dispatch }) {
	const changeCheked = (event) => {
		dispatch({ type: "change", payload: { isCompleted: event.target.checked, id: todo.id } })
	}

	const deleteItem = () => {
		dispatch({ type: "delete", payload: { id: todo.id } })
	}
	const truncate = (text) => {
		return text.toFixed(2)
	}

	return (
		<div className="item">
			<div className="item__id">{truncate(todo.id)}</div>
			<p className="item__text">{todo.text}</p>
			<div className="item__btn">
				<div className="checkbox-wrapper-19">
					<input
						type="checkbox"
						id={`cbtest-19${todo.id}`}
						checked={todo.isCompleted}
						onChange={changeCheked} />
					<label htmlFor={`cbtest-19${todo.id}`} className="check-box" />
				</div>
				<div className="item__delete" onClick={() => deleteItem(todo.id)}>
					<RiDeleteBackLine />
				</div>
			</div>
		</div>
	)
}
