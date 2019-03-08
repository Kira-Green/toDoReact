import React from "react";
import PropTypes from "prop-types";

class Input extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: ""
		};
	}

	handleChange = event => {
		const { value } = event.target;

		this.setState(state => ({
			value
		}));
	};

	handleEnter = event => {
		console.log(event.keyCode);
		console.log(event.key);
		if (event.keyCode === 13) {
			this.handleClick();
		}
	};

	handleClick = () => {
		if (!this.state.value) {
			return;
		}
		this.props.addItem(this.state.value);
		this.setState(state => ({
			value: ""
		}));
	};

	render() {
		return (
			<div>
				<input
					value={this.state.value}
					onChange={this.handleChange}
					onKeyUp={this.handleEnter}
				/>
				<button onClick={this.handleClick}>Add New Task</button>
			</div>
		);
	}
}

Input.propTypes = {
	addItem: PropTypes.func.isRequired
};

export default Input;
