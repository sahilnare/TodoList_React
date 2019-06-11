import React from 'react';
import './App.css';
import Header from "./components/Header";
import TodoItem from "./components/TodoItem"
import avengerData from "./components/avengerData.js"
import Form from "./Form"


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
    this.handleChange = this.handleChange.bind(this)
    this.handleForm = this.handleForm.bind(this)
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isLoading: false
      })
    }, 1500)
  }

  handleForm(event) {
    const {name, value, type, checked} = event.target
    type === "checkbox" ? this.setState({[name]: checked}) : this.setState({[name]: value})
  }

  handleChange(id) {
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

  render() {
    return (
      <div className="App">
        <Form 
          handleChange={this.handleChange}
          handleForm={this.handleForm}
          data={this.state}
        />
      </div>
    )
  }

  
}

export default App;
