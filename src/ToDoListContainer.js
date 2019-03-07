import React, { Component } from "react";

const ToDoListContainter = ({ tasks }) => {
	return (
		<div>
			To Do List Container
			<button className="ToDoListContainer-buttn">+ New Task</button>
			<h3 className="ToDoListContainer-title" />>
			<ul className="ToDoListContainer-list">
				{tasks.map(item => {
					<li className="ToDoListContainer-item">
						{item.title}- {item.status}
					</li>;
				})}
			</ul>
		</div>
	);
};

export default ToDoListContainter;
