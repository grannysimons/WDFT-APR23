import { useState } from "react";
import Summary from "./Summary";
import Task from "./Task";
import './ToDoList.css';

const initialTasksList = [{
    _id: "1a",
    name: "Task1",
    description: "Do something impoooooooortant",
    done: true
  },
  {
    _id: "2b",
    name: "Task2",
    description: "Do something important!!!",
    done: false
  },
  {
    _id: "3c",
    name: "Task3",
    description: "Do something important",
    done: false
  }];

function ToDoList() {

  const [tasksList, setTasksList] = useState(initialTasksList);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  //WE COULD PACK ALL THE VALUES OF THE INPUTS OF A FORM IN A SINGLE STATE AND UPDATE THE PROPERTY CORRESPONDING TO A SPECIFIC INPUT AT THE TIME:
  // const [form, setForm] = useState({});

  const doTask = (taskId) => {
    let newTasksList = tasksList.map(task => {
      if(task._id == taskId) {
        task.done = !task.done;
      }
      return task;
    })
    setTasksList(newTasksList);
  }

  const createTask = (e) => {
    // BAD OPTION!!!!
    // let title = document.getElementById("title").value;
    // let description = document.getElementById("description").value;

    e.preventDefault(); //prevents the default behaviour of the form to try to reach the server, which would cause a refresh of the aplication
    console.log("TITLE: ", title);
    console.log("DESCRIPTION: ", description);

    //OPTION 1
    // let newTasksList = tasksList.map(task => task);
    // newTasksList.push({
    //   _id: Math.round(Math.random()*10000000000000000000000),
    //   name: title,
    //   description: description,
    //   done: false
    // })
    // setTasksList(newTasksList);

    //OPTION 2 (BEEEETTER!!)
    ///... is the spread operator: copies all the elements of an array
    let newTask = {
      _id: Math.round(Math.random()*10000000000000000000000),
      name: title,
      description: description,
      done: false
    }
    setTasksList([...tasksList, newTask]);

  }

  const titleHandler = (e)=>{
    setTitle(e.target.value);
  }
  const descriptionHandler = (e) => {
    setDescription(e.target.value);
  }

    return (
        <div>
            <Summary total={tasksList.filter((taskItem)=>taskItem.done).length}/>
            <div className="todo-container">
                {/* <Task task={tasksList[0]}/>
                <Task task={tasksList[1]}/>
                <Task task={tasksList[2]}/> */}
                
                {tasksList.map(taskItem => <Task task={taskItem} buttonHandler={() => doTask(taskItem._id)} key={taskItem._id}/>)}

                {/* {[<Task task={tasksList[0]}/>, <Task task={tasksList[1]}/>, <Task task={tasksList[2]}/>]} */}
            </div>
            <form>
                <h1>Create task</h1>
                <label htmlFor="title">title</label>
                <input type="text" id="title" value={title} onChange={titleHandler} />
                <label htmlFor="description">description</label>
                <input type="text" id="description" value={description} onChange={descriptionHandler}/>
                <button onClick={createTask}>create task</button>
            </form>
        </div>
    );
}

export default ToDoList;