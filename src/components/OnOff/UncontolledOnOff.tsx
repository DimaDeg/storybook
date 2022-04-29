import {useState} from "react";

type OnOffType = {
    condition: (on: boolean)=>void
    defaultOn?: boolean
}

export const UncontolledOnOff = (props: OnOffType) => {
    let [on,setOn] = useState(props.defaultOn ? props.defaultOn : false)
    const OnStyle = {
        width: '30px',
        height: '30',
        border: '1px solid black',
        display: 'inline-block',
        padding: '10px',
        backgroundColor: on ? 'green' : 'white'
    }
    const OffStyle = {

        width: '30px',
        height: '30',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '10px',
        padding: '10px',
        backgroundColor: on ? 'white' : 'red'

    }
    const IndicatorStyle = {
        width: '30px',
        height: '30px',
        borderRadius: '15px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '10px',
        backgroundColor: on ?'green' : 'red'

    }
    const onCliked = () => {
        setOn(true)
        props.condition(true)
      
    }

    const offCliked = () => {
        setOn(false)
        props.condition(false)

    }

    return (


        <div>
            <div style={OnStyle} onClick={onCliked}>On</div>
            <div style={OffStyle} onClick={offCliked}>Off
            </div>
            <div style={IndicatorStyle}></div>

        </div>
    )


}