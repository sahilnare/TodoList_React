import React from 'react';
import './App.css';
import avengerData from "./components/avengerData.js"
import Form from "./Form"
import uuid from "uuid"


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      name: "",
      email: "",
      isMember: true,
      gender: "",
      favAvenger: "",
      isLoading: true,
      avengerList: avengerData
    }
    
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isLoading: false
      })
    }, 1500)
  }

  handleForm = (event) => {
    const {name, value, type, checked} = event.target
    type === "checkbox" ? this.setState({[name]: checked}) : this.setState({[name]: value})
  }

  handleChange = (id) => {
    this.setState(prevState => {
      const newData = prevState.avengerList.map(foo => {
        if(foo.id === id) {
          foo.completed = !foo.completed
        }
        return foo
      })
      return {
        avengerList: newData
      }
    })
  }

  handleAddTodo = (name, url, email) => {
    const newTodo = {
      id: uuid.v4(),
      name: name,
      url: url,
      email: email,
      completed: false
    }
    this.setState({
        avengerList: [...this.state.avengerList, newTodo]
      })
  }

  delBtn = (id) => {
    this.setState(prevState => {
      const newData = prevState.avengerList.filter(foo => foo.id !== id)
      return {
        avengerList: newData
      }
    })
  }

  render() {
    console.log(avengerData)
    return (
      <div className="App">
        <Form 
          handleChange={this.handleChange}
          handleForm={this.handleForm}
          handleAddTodo={this.handleAddTodo}
          delBtn={this.delBtn}
          data={this.state}
        />
      </div>
    )
  }

  
}

export default App;
