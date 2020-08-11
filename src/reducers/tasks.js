import { ADD_TASK, DELETE_TASK, CHANGE_DURING, GO_TIMER } from '../constants';
import { load } from 'redux-localstorage-simple';

let TASKS = load({ namespace: 'task-list' });

if (!TASKS || !TASKS.tasks || !TASKS.tasks.length) {
    TASKS = {
        tasks: [],
    }
}



const tasks = (state = TASKS.tasks, { type, id, name, timer, during }) => {
    switch (type) {
        case ADD_TASK:
            return [
                ...state, {
                    id,
                    name,
                    timer,
                    during,
                }
            ];
        case DELETE_TASK:
            return [...state].filter(task => task.id !== id);
        case CHANGE_DURING:
            return [...state].map((task, index) => (
                task.id === id ?
                    {
                        ...task,
                        during: !task.during
                    } :
                    task
            ));
        case GO_TIMER:
            return [...state].map((task, index) => (
                task.id === id ?
                    {
                        ...task,
                        timer: timer
                    } :
                    task
            ));
        default:
            return state;
    }
}

export default tasks;