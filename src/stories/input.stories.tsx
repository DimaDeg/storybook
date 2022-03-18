import React, {ChangeEvent, useRef, useState} from "react";


export default {
    title: 'input'
}

export const UncontrolledInput = () => <input/>

export const TrackValueOfUncontrolledInput = () => {
    const [value, setValue] = useState('')
    return (<><input onChange={(e) => setValue(e.currentTarget.value)}/>{value}</>)
}

export const GetValueOfUncontrolledInputByButtonPress = () => {
    const [value, setValue] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)
    const saveValue = () => {
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)
    }
    return (
        <><input ref={inputRef}/>
            <button onClick={saveValue}>
                save
            </button>
            {value}
        </>)
}

export const ControlledInputWithFixedValue = () => <input value={'abc'}/>


export const ControlledInput = () => {
    let [parentValue, setParentValue] = useState('')
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.value)
    }
    return <input value={parentValue} onChange={onChange}/>
}

export const ControlledCheckbox = () => {
    const [parent, setParent] = useState<boolean>(false)
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setParent(e.currentTarget.checked)
    }
    return <input type={'checkbox'} checked={parent} onChange={onChange}/>

}

export const ControlledSelect = () => {
    const [parentValue, setParentValue] = useState<string | undefined>(undefined)
    const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setParentValue(e.currentTarget.value)
    }
    return (
        <div>
            <select value={parentValue} onChange={onChange}>
                <option>None</option>
                <option value={'1'}>Minsk</option>
                <option value={'2'}>Moscow</option>
                <option value={'3'}>Kiev</option>
            </select>
            <>{parentValue}</>
        </div>
    )
}
