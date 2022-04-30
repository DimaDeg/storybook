import React from "react";
import {ClockViewType, getString} from "./Clock";

export const DigitalClock: React.FC<ClockViewType> = ({date}) => {
    return (<div style={{fontSize: 24}}>
        <span>{getString(date.getHours())}</span>:
        <span>{getString(date.getMinutes())}</span>:
        <span>{getString(date.getSeconds())}</span>

    </div>)
}