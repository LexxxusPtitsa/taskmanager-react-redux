import { ADD_TASK, DELETE_TASK, CHANGE_DURING, GO_TIMER } from "../constants";

export const addTask = (id, name , timer, during) => ({
    type: ADD_TASK,
    id,
    name,
    timer,
    during
});

export const deleteTask = (id) => ({
    type: DELETE_TASK,
    id
})

export const changeDuring = (id) => ({
    type: CHANGE_DURING,
    id
})
export const goTimer = (id,timer) => ({
    type: GO_TIMER,
    id,
    timer
})