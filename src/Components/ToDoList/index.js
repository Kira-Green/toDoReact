import React from "react";
import ToDoItem from "../ToDoItem";
import PropTypes from "prop-types";

const ToDoList = props => (
	<ul style={{ listStyle: "none" }}>
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

ToDoList.propTypes = {
	todos: PropTypes.array.isRequired,
	onDelete: PropTypes.func,
	onComplete: PropTypes.func
};
export default ToDoList;
