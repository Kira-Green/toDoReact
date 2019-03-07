import React from "react";
import PropTypes from "prop-types";

const ToDoItem = props => (
	<li>
		<button onClick={props.onComplete}>Done</button>
		{props.title} - {props.status ? "Complete" : "Not Complete"}
		<button onClick={props.onDelete}>x</button>
	</li>
);

ToDoItem.propTypes = {
	title: PropTypes.string.isRequired
};
export default ToDoItem;
