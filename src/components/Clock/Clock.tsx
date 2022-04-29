import React, {useEffect, useState} from "react";
import s from './Clock.module.css'


const getString = (num: number) => num < 10 ? '0' + num : num

export const Clock = () => {

    const [date, setDate] = useState(new Date())

    useEffect(() => {

        const intervalID = setInterval(() => {
            setDate(new Date())
        }, 1000)
        return () => {
            clearInterval(intervalID)
        }
    }, [])


    const hours = date.getHours() > 12 ? date.getHours() - 12 : date.getHours()

    return (
        <>
            <div style={{fontSize: 24}}>
                <span>{getString(date.getHours())}</span>:
                <span>{getString(date.getMinutes())}</span>:
                <span>{getString(date.getSeconds())}</span>

            </div>

            <div className={s.clock}>
                <div
                    className={s.hour}
                        style={{
                        transform: `rotateZ(${hours * 30}deg)`
                    }}
                />
                <div
                    className={s.min}
                    style={{
                        transform: `rotateZ(${date.getMinutes() * 6}deg)`
                    }}
                />
                <div
                    className={s.sec}
                    style={{
                        transform: `rotateZ(${date.getSeconds() * 6}deg)`
                    }}
                />

            </div>
        </>
    )
}