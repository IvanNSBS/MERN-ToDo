import "../styles/style.css";
import { ControllerContext, ACTIONS } from "./TodoView";
import { useState, useContext, useRef, useReducer } from "react";
import { BsTrashFill } from "react-icons/bs";
import { BiEditAlt } from "react-icons/bi";


function editDescriptionReducer(state, action)
{
    switch(action.type){
        case 'set-isEditing':
            return { isEditing: action.payload.isEditing, updatedDescription: state.updatedDescription }
        case 'set-updatedDescription':
            return { isEditing: state.isEditing, updatedDescription: action.payload.updatedDescription }
        case 'reset':
            return { isEditing: false, updatedDescription: "" }
        default: return state;
    }
}

/**
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
    const [state, dispatch] = useReducer( editDescriptionReducer, {isEditing: false, updatedDescription: "" })

    const controllerDispatcher = useContext(ControllerContext);
    const checkboxRef = useRef();

    let deleteBtnClass = isMouseOver ? "delete-task-btn" : "invisible";
    let editBtnClass = isMouseOver ? "edit-description-btn" : "invisible";

    function updateDescription(e)
    {
        e.preventDefault();
        controllerDispatcher( { type: ACTIONS.UPDATE_DESCRIPTION, payload: { index: index, value: state.updatedDescription}} );
        dispatch( { type: 'reset' })
    }

    return( 
        <div className="task-container" onMouseEnter={() => updateMouseOver(true)} onMouseLeave={() => updateMouseOver(false)}>
            <div className="task-checkbox-container">
                {!state.isEditing &&         
                    <div>
                        <input  ref={checkboxRef} type="checkbox" className="task-checkbox" checked={finished} 
                                onChange={() => controllerDispatcher( { type: ACTIONS.UPDATE_COMPLETED, payload: { index: index, value: checkboxRef.current.checked }} )}>
                        </input>
                        <span className={`task ${finished ? "finished-task" : ""}`}>{description}</span> 
                    </div>
                }
                {state.isEditing &&         
                    <form onSubmit={updateDescription}>
                        <input  placeholder="New Description" value={state.updatedDescription} autoFocus={true}
                                onChange={(e) => dispatch( {type: 'set-updatedDescription', payload: {updatedDescription: e.target.value}} )}/>
                    </form>
                }
                <div className="task-btns-container">
                    <button className={ editBtnClass } onClick={() => dispatch( {type: 'set-isEditing', payload: {isEditing: !state.isEditing}}) }>
                        <BiEditAlt className="edit"/>
                    </button>
                    <button className={ deleteBtnClass } onClick={() => controllerDispatcher( { type: ACTIONS.DELETE, payload: { index }} )}>
                        <BsTrashFill className="trashbin"/>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Task;