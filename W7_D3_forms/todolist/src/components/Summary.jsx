export default function Summary({total}) {
    /*
    props = {
        total: 1
    }
    */
    return (
        <div>
            <h1>TASKS COMPLETED:</h1>
            <p className="tasks-completed">{total}</p>
        </div>
    );
}
