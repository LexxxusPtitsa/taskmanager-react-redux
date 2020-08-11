import React, { useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { changeDuring } from "../actions/actionCreators";
import Timer from "./Timer";
import Popup from "./Popup";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faPlay, faPause } from '@fortawesome/free-solid-svg-icons';



export default function Item({ id }) {
    const dispatch = useDispatch();
    const filtered = useSelector(state => state.tasks.filter(task => task.id === id));
    const task = filtered[0];
    const [popup, setPopup] = useState(false)

    const handleChangeDuring = (dur) => {
        dispatch(changeDuring(task.id));
    };
    const handlePopup = () => {
        setPopup(!popup);
    };

    return (
        <div className={"task"}>
            <div className="task__name">
                {task.name}
            </div>
            <Timer id={id} />
            <div className="task__buttons">
                <div className="task__button task__button-state" onClick={() => handleChangeDuring()}>
                    {!task.during ?
                        <FontAwesomeIcon icon={faPlay} /> :
                        <FontAwesomeIcon icon={faPause} />
                    }
                </div>
                <div className="task__button task__button-delete">
                    <FontAwesomeIcon icon={faTrashAlt} onClick={() => handlePopup()} />
                </div>
            </div>
            {!popup ? null : <Popup id={id} handlePopup={handlePopup} />}
        </div>
    )
}
