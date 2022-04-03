import React from "react";

type ItemType = {
    title: string
    value: any
}

export type AccordionPropsType = {
    title: string;
    onChange: () => void
    collapsed: boolean
    items: ItemType[]
    onClick: (value: any) => void
}

type AccordionTitleType={
    title:string
    onChange:()=>void
}

export const Accordion: React.FC<AccordionPropsType> = (props) => {
    console.log("Accordion rendering")
    return (<div>
        <AccordionTitle title={props.title}
                        onChange={props.onChange}/>
        {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
    </div>)

}

function AccordionTitle(props: AccordionTitleType) {
    console.log("AccordionTitle rendering")
    return <h3 onClick={props.onChange}>{props.title}</h3>
}

export type AccordionBodyPropsType = {
    items: Array<ItemType>
    onClick: (value: any) => void
}

function AccordionBody(props: AccordionBodyPropsType) {
    console.log("AccordionBody rendering")
    return <ul>
        {props.items.map((f, i) => <li onClick={() => {
            props.onClick(f.value)
        }} key={i}>{f.title}</li>)}
    </ul>
}
