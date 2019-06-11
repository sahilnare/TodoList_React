import React from "react"
import './App.css';
import Header from "./components/Header";
import TodoItem from "./components/TodoItem"
import avengerData from "./components/avengerData.js"

function Form(props) {
	const avengerInfo = props.data.avengerList.map(item => <TodoItem contact={item} key={item.id} handleChange={props.handleChange}/>)
    let tasksLeft = props.data.avengerList.filter(zoo => {
      return !zoo.completed
    })
	return (
		<div>
			<Header />
	        {
	          props.data.isLoading ? 
	          <h1 className="loading">Loading...</h1> : 
	          <div className="todo-list">
	            <input 
	              type="text" 
	              name="name" 
	              value={props.data.name} 
	              placeholder="Name" 
	              onChange={props.handleForm} 
	            />
	            <input 
	              type="text" 
	              name="email" 
	              value={props.data.email} 
	              placeholder="Email" 
	              onChange={props.handleForm} 
	            />
	            <label>
	              <input 
	                type="checkbox" 
	                name="isMember" 
	                checked={props.data.isMember} 
	                onChange={props.handleForm}
	              /> Are you a member?
	            </label>
	            <label>
	              <input 
	                type="radio" 
	                name="gender" 
	                value="male"
	                checked={props.data.gender === "male"} 
	                onChange={props.handleForm}
	              /> Male
	            </label>
	            <label>
	              <input 
	                type="radio" 
	                name="gender" 
	                value="female"
	                checked={props.data.gender === "female"} 
	                onChange={props.handleForm}
	              /> Female
	            </label>
	            <label>
	              <input 
	                type="radio" 
	                name="gender" 
	                value="other"
	                checked={props.data.gender === "other"} 
	                onChange={props.handleForm}
	              /> Other
	            </label>
	            <label>Your favourite Avenger is:</label>
	            <select
	              name="favAvenger"
	              onChange={props.handleForm}
	              value={props.data.favAvenger}
	            >
	              <option value="">-- Please choose --</option>
	              <option value="Scarlet Witch">Scarlet Witch</option>
	              <option value="Ant-man">Ant-Man</option>
	              <option value="Wasp">Wasp</option>
	              <option value="Spider-man">Spider-Man</option>
	              <option value="Falcon">Falcon</option>
	              <option value="Winter Soldier">Winter-Soldier</option>
	            </select>
	            <h2>You are a {props.data.gender}</h2>
	            <h2>Your favourite Avenger is {props.data.favAvenger}</h2>
	            {
	              tasksLeft.length > 0 && 
	              <p className="message-alert">You have {tasksLeft.length} tasks left!</p>
	            } 
	            {avengerInfo}
	          </div>
	        }
		</div>
	)
}


export default Form