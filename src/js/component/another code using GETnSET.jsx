/*import React from "react";
import { useState, useEffect } from "react";

const Home = () => {
	const[todos, setTodos] = useState(() => {
	
		const savedTodos = localStorage.getItem("todos");
		if (savedTodos) {
		  return JSON.parse(savedTodos);
		} else {
		  return [];
		}
	  });

	  const[inputValue, setInputValue] = useState("");
	
	  useEffect(() => {
		localStorage.setItem("todos", JSON.stringify(todos));
	  }, [todos]);

	const handleChange = (event) => {
		setInputValue(event.target.value);
	  };
	
	const handleKeyDown = (event) => {
		if (event.key === 'Enter') {
			const newTodos = [...todos,inputValue]
			setTodos(newTodos);
			setInputValue("")
		}
	  };
	return (
		<div className="container">
			<h1>My Todo List</h1>
			<ul>
				<li>
					<input type="text"
					value={inputValue}
					onChange={handleChange}
					onKeyDown={handleKeyDown}
					placeholder="Tasks To Be Done"></input>
					</li>
				{todos.map((item, index) =>
					<li>{item}{""} <i className="fas fa-trash-alt"
					onClick={() =>
					setTodos(
						todos.filter(
							(t,currentIndex) =>
							index != currentIndex
						)
					)
				}
					></i></li>
				)

				}
				
			</ul>
			<div>{todos.length===0 ? <h4>No tasks, add one!</h4> : <h5>You have {todos.length} tasks to complete</h5>}</div>
		</div>
	);
};

export default Home;


.container{
    margin-top: 100px;
    width: 500px;
}

ul{
    padding: 0;
    margin-bottom: 0;
}

ul li{
    border: 1px solid rgb(77, 74, 74);
    list-style: none;
    padding: 7px;
    background-color: rgb(245, 240, 234);
    color: blue;
    font-size: 1.5rem;
}

h1{
    text-align: center;
}

input{
    border: none;
    width: 100%;
    height:40px;
    background-color: rgb(209, 205, 199);
}

i{
    color:brown;
    display: block;
    float:right;
    visibility: hidden;
}

 li:hover >i{
    visibility: visible;
}*/