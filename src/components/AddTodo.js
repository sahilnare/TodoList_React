import React from "react";
import "../App.css"

class AddTodo extends React.Component {
    constructor() {
        super()
        this.state = {
            name: "",
            url: "",
            email: ""
        }
    }

    handleAddTodo = (event) => {
        event.preventDefault()
        this.props.handleAddTodo(this.state.name, this.state.url, this.state.email)
        this.setState({
            name: "",
            url: "",
            email: ""
        })
    }

    handleChange = (event) => {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <form onSubmit={this.handleAddTodo} className="todo-form">
                <input 
                    type="text" 
                    name="name" 
                    placeholder="Name" 
                    value={this.state.name} 
                    onChange={this.handleChange}
                />
                <input
                    type="text"
                    name="url"
                    placeholder="Photo-url"
                    value={this.state.url}
                    onChange={this.handleChange}
                />
                <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    value={this.state.email}
                    onChange={this.handleChange}
                />
                <button>Add</button>
            </form>
        )
    }
}

export default AddTodo