import React from "react";
import "../App.css"

class TodoItem extends React.Component {
	render() {
		const itemStyle = {
			backgroundColor: "lightgray",
			color: "gray",
			textDecoration: "line-through"
		}
		return (
			<div className="todo-item" style={this.props.contact.completed ? itemStyle : null}>
				<input type="checkbox" checked={this.props.contact.completed} onChange={() => {this.props.handleChange(this.props.contact.id)}}/>
				<h2>{this.props.contact.name}</h2>
				<img src={this.props.contact.url} />
				<p>Email: {this.props.contact.email}</p>
			</div>
		);
	}
} 

export default TodoItem