import React, {useEffect, useState} from "react";

export default {
    title: 'useEffect demo'
}

export const Example1 = () => {

    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)
    //использование
    //запрос с сервера
    //setInterval
    //indexedDB
    //document.getElementById
    //document.title = 'user'

    useEffect(() => {
        console.log('Every render')
        document.title = counter.toString();
    })
    useEffect(() => {
        console.log('Only 1st render (Component Did Mount)')
        document.title = counter.toString();
    }, [])
    useEffect(() => {
        console.log('1st render and every counter change')
        document.title = counter.toString();
    }, [counter])

    return (<>
        <div>
            f{fake}
            <button onClick={() => setFake(fake + 1)}>+ fake</button>
        </div>
        <div>
            {counter}
            <button onClick={() => setCounter(counter + 1)}>+ counter</button>
        </div>
    </>)

}

export const SetIntervalExample = () => {

    const [date, setDate] = useState<Date>()

    useEffect(() => {

        const intervalID = setInterval(() => {
            setDate(new Date())

        }, 1000)
        return () => {
            clearInterval(intervalID)
        }
    }, [])

    const time = date?.toLocaleTimeString()

    return (
        <div>
            {time}
        </div>
    )
}

export const CaseTrackerExample = () => {

    const [text, setText] = useState('')

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            console.log(e.key)
            setText(text + e.key)
        }
        window.addEventListener('keypress', handler)
        return () => {
            window.removeEventListener('keypress', handler)
        }
    }, [text])
    //для сброса эффекта необходимо передавать туже фунцию


    return <div>
        typed:
        {text}
    </div>
}

export const SetTimeoutExample = () => {


    const [text, setText] = useState('')

    useEffect(() => {
        const timeout = setTimeout(() => {
            setText('3 sec later')
        }, 3000)
        return () => {
            clearTimeout(timeout)
        }
    }, [text])

    return <div>
        text:
        {text}
    </div>
}