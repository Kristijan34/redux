import React from 'react';
import './App.css';
import {Provider} from 'react-redux';
import store from './store';
import Todos from './components/todos';
import TodoInput from './components/todosInput';

const App = () => {
	return (
		<Provider store={store}>
			<div className="App">
				Todo List
				<br />
				<TodoInput />
				<Todos />
			</div>
		</Provider>
	);
};

export default App;
