import React, { Component } from "react";
import Input from "./Components/Input";
import ToDoList from "./Components/ToDoList";
import "./App.css";
import Header from "./Components/Header";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			todos: [
				{ title: "buy eggs", complete: false },
				{ title: "clean kitchen", complete: false }
			]
		};
	}
	addAToDo = todo => {
		this.setState(state => ({
			todos: [...state.todos, { title: todo, complete: false }]
		}));
	};

	deleteAToDo = index => {
		this.setState(state => ({
			todos: [
				...state.todos.slice(0, index),
				...state.todos.slice(index + 1)
			]
		}));
	};
	completeAToDo = index => {
		this.setState(state => ({
			todos: [
				...state.todos.slice(0, index),
				{
					...state.todos[index],
					complete: !this.state.todos[index].complete
				},
				...state.todos.slice(index + 1)
			]
		}));
	};

	render() {
		return (
			<div className="App">
				<Header />
				<Input addItem={this.addAToDo} />
				<ToDoList
					todos={this.state.todos}
					onDelete={this.deleteAToDo}
					onComplete={this.completeAToDo}
				/>
			</div>
		);
	}
}

export default App;
