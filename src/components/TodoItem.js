import React from "react";
import "../App.css"

class TodoItem extends React.Component {
	render() {
		const itemStyle = {
			backgroundColor: "lightgray",
			color: "gray",
			textDecoration: "line-through"
		}
		const {name, url, email, completed, id} = this.props.contact
		return (
			<div className="todo-item" style={completed ? itemStyle : null}>
				<input 
					type="checkbox" 
					checked={completed} 
					onChange={() => {this.props.handleChange(id)}}
				/>
				<h2>{name}</h2>
				<img src={url} alt="Earth"/>
				<p>Email: {email}</p>
				<button onClick={() => {this.props.delBtn(id)}}>Delete</button>
			</div>
		);
	}
} 

export default TodoItem