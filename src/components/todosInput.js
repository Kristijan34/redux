import React, {useState} from 'react';
import {useDispatch} from 'react-redux';

const TodoInout = () => {
	const dispatch = useDispatch();
	const [newTodo, setNewTodo] = useState();

	const handleChange = (event) => {
		setNewTodo(event.target.value);
	};

	const handleClick = () => {
		dispatch({
			type: 'TODO_LIST',
			payload: {
				label: newTodo,
				id: Math.ceil(Math.random() * 100),
			},
		});
	};

	return (
		<>
			<input
				value={newTodo}
				onChange={handleChange}
				type="text"
				placeholder="Inser your items here"
			/>
			<button onClick={handleClick}>Add new item</button>
		</>
	);
};

export default TodoInout;
