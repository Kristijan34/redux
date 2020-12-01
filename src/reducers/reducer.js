import {TODO_LIST, DELETE_ITEM} from '../constants/action-types';

const initalState = {
	todos: [],
};

const reducer = (state = initalState, action) => {
	switch (action.type) {
		case TODO_LIST:
			return {
				...state,
				todos: [...state.todos, action.payload],
			};

		case DELETE_ITEM:
			return {
				...state,
				todos: state.todos.filter((todo) => todo.id !== action.payload),
			};
		default:
			return state;
	}
};

export default reducer;
