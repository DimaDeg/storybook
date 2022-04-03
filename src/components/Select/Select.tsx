import React, {useState, KeyboardEvent, useEffect} from "react";
import s from "./Select.module.css"

type SelectType = {
    value?: any,
    onChange: (value: any) => void
    items: ItemType[]
}

export type ItemType = {
    title: string
    value: any
}

export function Select(props: SelectType) {
    const [active, setActive] = useState(false)
    const [hoveredElement, setHoveredElement] = useState(props.value)
    useEffect(() => {
        setHoveredElement(props.value)
    }, [props.value])
    const selectItem = props.items.find(f => f.value === props.value)
    const hoveredItem = props.items.find(f => f.value === hoveredElement)
    const toggleItems = () => setActive(!active)
    const onItemClick = (value: any) => {
        props.onChange(value);
        toggleItems()
    }
    const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp')
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hoveredElement) {
                    const pretendentElement = e.key === 'ArrowDown'
                        ? props.items[i + 1] : props.items[i - 1]
                    if (pretendentElement) {
                        props.onChange(pretendentElement.value)
                        return
                    }
                }
                if(!selectItem){
                    props.onChange(props.items[0].value)

                }
            }


        if (e.key === 'Enter' || e.key === 'Escape') {
            setActive(false)
        }
    }


    return (
        <div className={s.select} onKeyDown={onKeyDown} tabIndex={0}>
            <div onClick={toggleItems}>
                <span className={s.main}>{selectItem && selectItem.title}</span>
            </div>
            {active &&
                <div className={s.items}>
                    {props.items.map((f) => <div onMouseEnter={() => setHoveredElement(f.value)}
                                                 className={s.item + ' ' + (hoveredItem === f ? s.selected : '')}
                                                 onClick={() => {
                                                     onItemClick(f.value)
                                                 }}
                                                 key={f.value}>
                        {f.title}</div>)}
                </div>}
        </div>)

}