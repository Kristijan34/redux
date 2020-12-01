import {TODO_LIST, DELETE_ITEM} from '../constants/action-types';

export const todo_list = () => ({
	type: TODO_LIST,
});

export const delete_item = () => ({
	type: DELETE_ITEM,
});
