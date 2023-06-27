import React, { useState } from "react";

const TaskManager = () => {

    const [titleInputValue, setTitleInputValue] = useState("")
    const [descriptionInputValue, setDescriptionInputValue] = useState("")
    const [taskList, setTaskList] = useState([])

    const newTask = () => {
        if (!titleInputValue && !descriptionInputValue) return;

        const newTaskItem = {
            title: titleInputValue,
            description: descriptionInputValue,
        };

        setTaskList((prev) => [...prev, newTaskItem]);
        setTitleInputValue("");
        setDescriptionInputValue("");
    };


    const onChangeTitle = (e) => {
        setTitleInputValue(e.target.value)
    }

    const onChangeDescription = (e) => {
        setDescriptionInputValue(e.target.value)
    }

    const handleDelete = (mapIndex) => {
        setTaskList((prev) => taskList.filter((_, index) => index !== mapIndex))
    }
    

    const handleKeyDown = (e) => {
        if (e.key === "Enter" && e.shiftKey) {
            setDescriptionInputValue((prevValue) => prevValue + "\n");
            e.preventDefault(); 
        }

        if (e.key === "Enter") {
            e.preventDefault(); 
            newTask();
        }
    };


    return <>
        <div className="general-wraper flex-column container ">
            <div className="inputs-class">
                <input className="input-title mb-2" type="text" placeholder="Task Title" value={titleInputValue} onChange={onChangeTitle} />
                <textarea className="input-description" placeholder="Describe your task (optional)" value={descriptionInputValue} onChange={onChangeDescription} onKeyDown={handleKeyDown} ></textarea>
            </div>
            <button className="add-button" type="submit" onClick={newTask}>Add</button>
            {taskList.length > 0 &&
                <div className="list-body">
                    <ul className="general-list">
                        {taskList.map((task, index) => (
                            <li key={index}> <div className="d-flex justify-content-between align-items-center"><h5 className="text-center">{task.title}</h5> <button className="delete-button" type="button" onClick={() => handleDelete(index)}>X</button></div> <div>{task.description}</div> </li>
                        ))}
                    </ul>
                </div>
            }
        </div>

    </>
};

export default TaskManager;