function Task({ task, buttonHandler }) {
    const { name, description, done } = task;
    /*
        props = {
            task: {
                _id: "1a",
                name: "Task1",
                description: "Do something impoooooooortant",
                done: false
            }
        }
    */

    const doTask = () => {
        //we mark the task as done/undone
        buttonHandler();
    }

    return (
        <div className="task-card">
            <div className="task-card-half">
                <h1>{name}</h1>

                {done && <span>DONE</span>}
                {!done && <span>PENDING ⌛</span>}

                {/* {done ? <span>DONE</span> : <span>PENDING ⌛</span>} */}

                <h2>Task Description</h2>
                <p>{description}</p>

                <button className="add" onClick={doTask}> {done ? <span>UNDO</span> : <span>✔️</span>} </button>
            </div>
        </div>
    );
}

export default Task;