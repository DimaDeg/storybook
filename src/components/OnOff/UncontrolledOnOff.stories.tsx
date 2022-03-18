import React,{useState} from "react";
import {action} from "@storybook/addon-actions";
import {UncontolledOnOff} from "./UncontolledOnOff";

export default {
    title:'UncontrolledOnOff',
    component: UncontolledOnOff
}

const callback= action('On or off clicked')

export const UncontrolledOn = () => <UncontolledOnOff defaultOn={true} condition={callback}/>
export const UncontrolledOff = () => <UncontolledOnOff defaultOn={false} condition={callback}/>
export const ChangeOnOff = ()=>{
    let [value,setValue]=useState(false)

    return(
            <UncontolledOnOff condition={()=>{setValue(value)}}/>)}
