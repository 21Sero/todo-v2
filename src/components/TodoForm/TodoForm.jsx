import { FcTodoList } from "react-icons/fc";
import { MdAddTask } from "react-icons/md";
import "./TodoForm.scss"

export default function TodoForm({ dispatch }) {
	const onSubmitForm = (event) => {
		event.preventDefault();
		dispatch({
			type: "add",
			payload: {
				submit: event.target.input.value
			}
		})
		event.target.input.value = "";
	}
	return (
		<div className='container'>
			<form className='container__form' onSubmit={onSubmitForm}>
				<label className='container__form__input__label' htmlFor='input'>
					<FcTodoList className='container__form__input__icon' />
					<input type="text" className='container__form__input' id="input" placeholder='Add your todo...' />
				</label>
				<button type="submit" className='container__form__button'>
					<MdAddTask className='container__form__button__icon' />
				</button>
			</form>
		</div>
	)
}
