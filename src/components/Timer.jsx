import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { goTimer } from "../actions/actionCreators";

export default function Timer({ id }) {
    const filtered = useSelector(state => state.tasks.filter(task => task.id === id))[0];
    const dispatch = useDispatch();
    const during = filtered.during;
    const [start, setStart] = useState();
    const [timer, setTimer] = useState(filtered.timer);
    let s, m, h, d, startTime, curTime, stopTime, reloadTime;
    curTime = (new Date()).getTime();
    startTime = filtered.timer.start;
    stopTime = filtered.timer.stop;
    reloadTime = filtered.timer.reload;
    s = filtered.timer.sec;
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
    const stopTim = () => {

        setTimer({ start: filtered.timer.start, stop: (new Date()).getTime(), sec: filtered.timer.sec, reload: (new Date()).getTime() });
        dispatch(goTimer(id, { start: filtered.timer.start, stop: (new Date()).getTime(), sec: filtered.timer.sec }));
        console.log('stop');
    }
    const startTimer = () => {
        const current = (new Date()).getTime();
        setStart(setInterval(() => {
            curTime = (new Date()).getTime();

            let starts = !stopTime ? reloadTime : current;
            let stope;
            let seconds = 0;
            if (!stopTime) {
                seconds = Math.floor((curTime - starts) / 1000) + Math.floor(filtered.timer.sec);
                stope = false;
            } else {
                seconds = filtered.timer.sec++;
                stope = false;
            }

            dispatch(goTimer(id, { start: starts, stop: stope, sec: seconds, reload: (new Date()).getTime() }));
            setTimer({ start: starts, stop: stope, sec: seconds, reload: (new Date()).getTime() });
            console.log({ start: starts, stop: stope, sec: seconds, reload: (new Date()).getTime() });

        }, 1000));
        console.log('start');
    };

    const stopTimer = () => {
        if (!during) {
            clearInterval(start);
            stopTim();
        }
    }
    return (
        <div className="timer">
            {d > 0 ?
                <>
                    <span>{d < 10 ? "0" : null}{d}</span>
                    <span>{":"}</span>
                </>
                : null
            }
            {Math.floor(h % 24) > 0 ?
                <>
                    <span>{Math.floor(h % 24) < 10 ? "0" : null}
                        {Math.floor(h % 24)}</span>
                    <span>{":"}</span>
                </>
                : null
            }

            {Math.floor(m % 60) < 10 ? "0" : null}
            {Math.floor(m % 60)}
            <span>{":"}</span>
            {Math.floor(s % 60) < 10 ? "0" : null}
            {Math.floor(s % 60)}
        </div>
    )
}
