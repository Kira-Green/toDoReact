import React from "react";
import ToDoItem from "../ToDoItem";

const ToDoList = props => (
	<ul>
		{props.todos.map((item, idx) => (
			<ToDoItem
				key={idx}
				title={item.title}
				status={item.complete}
				onDelete={() => props.onDelete(idx)}
				onComplete={() => props.onComplete(idx)}
			/>
		))}
	</ul>
);

export default ToDoList;
