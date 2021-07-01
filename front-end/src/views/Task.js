import "../styles/style.css"
import { useState } from "react";
import { BsTrashFill } from "react-icons/bs"

/**
 * 
 * @param {BigInteger} index - Task index in array 
 * @param {String} description - Task description 
 * @param {Boolean} finished - Whether task is marked as finished or not 
 * @param {Function} updateTask - Function to update a task, given it's index 
 * @param {Function} deleteTask - Function to delete a task, given it's index 
 * @returns Task Element View
 */
function Task( { index, description, finished, updateTask, deleteTask } )
{
    const [isMouseOver, updateMouseOver] = useState(false);

    function onMouseEnter() { updateMouseOver(true) }
    function onMouseLeave() { updateMouseOver(false) }
    function toggleCheckbox(event) { 
        console.log(event.target.value)
        updateTask(index)
    }

    let deleteBtnClass = isMouseOver ? "delete-task" : "invisible";
    return( 
        <div className="task-container" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <div className="task-checkbox-container">
                <div>
                    <input type="checkbox" className="task-checkbox" checked={finished} onClick={toggleCheckbox}></input>
                    <span className={`task ${finished ? "finished-task" : ""}`}>{description}</span> 
                </div>
                <button className={ deleteBtnClass } onClick={() => {deleteTask(index)}}>
                    <BsTrashFill className="trashbin"/>
                </button>
            </div>
        </div>
    )
}

export default Task;