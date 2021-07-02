import "../styles/style.css";
import { ControllerContext, ACTIONS } from "./TodoView";
import { useState, useContext } from "react";
import { BsTrashFill } from "react-icons/bs";

/**
 * 
 * @param {BigInteger} index - Task index in array 
 * @param {String} description - Task description 
 * @param {Boolean} finished - Whether task is marked as finished or not 
 * @param {Function} updateTask - Function to update a task, given it's index 
 * @param {Function} deleteTask - Function to delete a task, given it's index 
 * @returns Task Element View
 */
function Task( { index, description, finished } )
{
    const [isMouseOver, updateMouseOver] = useState(false);
    const controllerDispatcher = useContext(ControllerContext);
    
    let deleteBtnClass = isMouseOver ? "delete-task" : "invisible";


    return( 
        <div className="task-container" onMouseEnter={() => updateMouseOver(true)} onMouseLeave={() => updateMouseOver(false)}>
            <div className="task-checkbox-container">
                <div>
                    <input  type="checkbox" className="task-checkbox" checked={finished} 
                            onChange={() => controllerDispatcher( { type: ACTIONS.UPDATE, payload: { index }} )}>
                    </input>
                    <span className={`task ${finished ? "finished-task" : ""}`}>{description}</span> 
                </div>
                <button className={ deleteBtnClass } onClick={() => controllerDispatcher( { type: ACTIONS.DELETE, payload: { index }} )}>
                    <BsTrashFill className="trashbin"/>
                </button>
            </div>
        </div>
    )
}

export default Task;