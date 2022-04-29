import React, {useMemo, useState} from "react";

export default {
    title: 'useState demo'
}

function generateData(){
    console.log('genData')
    return 34321152362534;
}

export const Example1 = () => {
    console.log('Ex 1')

/*    const initValue = useMemo(generateData,[]) оптимизация через useMemo

    const [counter, setCounter] = useState(initValue)*/

    const [counter,setCounter] = useState(generateData) //передача ф-ции только при тяжёлом подсчёте
        //set ф-ция тоже может принимать ф-цию

    return (<>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        {counter}
    </>)

}