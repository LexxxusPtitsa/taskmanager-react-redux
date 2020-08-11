import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { addTask } from '../actions/actionCreators';

export default function Header() {
    const [value, setValue] = useState('');
    const dispatch = useDispatch();
    const handleChange = (e) => {
        setValue(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const id = (new Date()).getTime();
        const name = e.target.name.value;
        const timer = {sec: 0};
        dispatch(addTask(id, name, timer, true));
        setValue('');
    }

    return (
        <div className={"header"}>
            <h1 className="header__title">
                TaskManager
            </h1>
            <form className={"header__form"}
                noValidate
                autoComplete="off"
                onSubmit={e => handleSubmit(e)}
            >
                <TextField
                    id="standard-basic"
                    label="Task name..."
                    name='name'
                    onChange={e => handleChange(e)}
                    value={value}
                />
                <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                >
                    Create
                </Button>
            </form>
        </div>
    )
}
