import React from 'react';
import Button from '@material-ui/core/Button';
import { deleteTask, changeDuring } from "../actions/actionCreators";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from "react-redux";



export default function Popup({ id, handlePopup }) {
    const dispatch = useDispatch();

    const handleDelete = () => {
        handlePopup();
        dispatch(changeDuring(id));
        dispatch(deleteTask(id));
    };
    return (
        <div className={"popup"}>
            <div className="popup__inner">
                <h1 className="popup__title">
                    Are you sure?
                </h1>
                <div className="popup__buttons">
                    <Button
                        onClick={() => handleDelete()}
                        variant="contained"
                        color="secondary"
                        startIcon={<FontAwesomeIcon icon={faTrashAlt} />}
                    >
                        Delete
                    </Button>
                    <Button variant="contained" color="primary" onClick={() => handlePopup()}>
                        Cancel
                    </Button>
                </div>
            </div>
        </div>
    )
}
