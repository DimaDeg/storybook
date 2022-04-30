import React from "react";
import s from "./Clock.module.css";
import {ClockViewType} from "./Clock";

export const AnalogClock: React.FC<ClockViewType> = ({date}) => {

    const Hours = {transform: `rotateZ(${date.getHours() * 30}deg)`}

    const Minutes = {transform: `rotateZ(${date.getMinutes() * 6}deg)`}

    const Seconds = {transform: `rotateZ(${date.getSeconds() * 6}deg)`}

    return (
        <div className={s.clock}>
            <div
                className={s.hour}
                style={Hours}
            />
            <div
                className={s.min}
                style={Minutes}
            />
            <div
                className={s.sec}
                style={Seconds}
            />
        </div>)
}