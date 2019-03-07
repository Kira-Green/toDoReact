import React from "react";

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
				<input value={this.state.value} onChange={this.handleChange} />
				<button onClick={this.handleClick}>Add New Task</button>
			</div>
		);
	}
}

export default Input;
