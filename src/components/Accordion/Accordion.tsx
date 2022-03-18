import React from "react";

export type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    changed: () => void
}

export function Accordion(props: AccordionPropsType) {
    console.log("Accordion rendering")
    return <div>
        <AccordionTitle title={props.titleValue}
                        changed={props.changed}/>
        {!props.collapsed ? <AccordionBody/> : ''}
    </div>

}

type AccordionTitlePropsType = {
    title: string;
    changed: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendering")
    return <h3 onClick={(e)=>props.changed()}>{props.title}</h3>
}

function AccordionBody() {
    console.log("AccordionBody rendering")
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}
