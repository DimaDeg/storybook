import React, {useEffect, useState} from "react";
import {DigitalClock} from "./DigitalClock";
import {AnalogClock} from "./AnalogClock";

type ClockType = {
    mode: 'digital' | 'analog'
}

export type ClockViewType = {
    date: Date
}

export const getString = (num: number) => num < 10 ? '0' + num : num

export const Clock: React.FC<ClockType> = (props) => {

    const [date, setDate] = useState(new Date())

    useEffect(() => {

        const intervalID = setInterval(() => {
            setDate(new Date())
        }, 1000)
        return () => {
            clearInterval(intervalID)
        }
    }, [])

    let view;

    switch (props.mode) {
        case "digital":
            view = <DigitalClock date={date}/>
            break
        case "analog":
            view = <AnalogClock date={date}/>
            break
        default:
            view = <DigitalClock date={date}/>
    }

    return <div>
            {view}
        </div>

}



