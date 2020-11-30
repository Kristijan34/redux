import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

const Todos = () => {
	const dispatch = useDispatch();
	const todos = useSelector((state) => state.todos);

	const handleClick = (id) => {
		dispatch({
			type: 'DELETE_ITEM',
			payload: id,
		});
	};

	return (
		<div className="checkbox">
			<ol>
				{todos.map((todo) => (
					<li>
						{todo.label}

						<button
							className=""
							onClick={() => handleClick(todo.id)}
						>
							Delete
						</button>
					</li>
				))}
			</ol>
		</div>
	);
};

export default Todos;
