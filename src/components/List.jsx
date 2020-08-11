import React from 'react';
import { useSelector } from "react-redux";
import Item from "./Item";

export default function List() {
    const tasks = useSelector(state => state.tasks);

    return (
        <div>
            {
                tasks.map((task, key) => (
                    <Item key={key} id={task.id} />
                ))
            }

        </div>
    )
}
