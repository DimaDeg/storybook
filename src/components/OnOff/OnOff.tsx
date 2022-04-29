import {useState} from "react";

type OnOffType = {
    on: boolean
    Change: (on:boolean)=>void
}

export const OnOff = (props: OnOffType) => {

    const OnStyle = {
        width: '30px',
        height: '30',
        border: '1px solid black',
        display: 'inline-block',
        padding: '10px',
        backgroundColor: props.on ? 'green' : 'white'
    }
    const OffStyle = {

        width: '30px',
        height: '30',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '10px',
        padding: '10px',
        backgroundColor: props.on ? 'white' : 'red'

    }
    const IndicatorStyle = {
        width: '30px',
        height: '30px',
        borderRadius: '15px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '10px',
        backgroundColor: props.on ?'green' : 'red'

    }


    return (
        <div>
            <div style={OnStyle} onClick={()=>{ props.Change(true)}}>On</div>
            <div style={OffStyle} onClick={()=>{props.Change(false)}}>Off
            </div>
            <div style={IndicatorStyle}></div>

        </div>
    )


}