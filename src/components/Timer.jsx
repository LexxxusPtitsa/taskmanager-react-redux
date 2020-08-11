import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { goTimer } from "../actions/actionCreators";

export default function Timer({ id }) {
    const filtered = useSelector(state => state.tasks.filter(task => task.id === id))[0];
    const dispatch = useDispatch();
    let timer = filtered.timer;
    const during = filtered.during;
    const [start, setStart] = useState();
    let s, m, h, d;
    s = timer.sec;
    m = s / 60;
    h = m / 60;
    d = Math.floor(h / 24);

    useEffect(() => {
        if (!during) {
            stopTimer();
        } else {
            startTimer();
        }
    }, [during])

    const startTimer = () => {
        setStart(setInterval(() => {
            dispatch(goTimer(id,{ sec: timer.sec++ }));
        }, 1000));
        console.log('start');
    };

    const stopTimer = () => {
        clearInterval(start);
        console.log('stop')
    }
    return (
        <div className="timer">
            {d < 10 ? "0" : null}
            {d}
            <span>:</span>
            {Math.floor(h % 24) < 10 ? "0" : null}
            {Math.floor(h % 24)}
            <span>:</span>
            {Math.floor(m % 60) < 10 ? "0" : null}
            {Math.floor(m % 60)}
            <span>:</span>
            {Math.floor(s % 60) < 10 ? "0" : null}
            {Math.floor(s % 60)}
        </div>
    )
}
