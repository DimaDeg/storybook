import React, {useState} from "react";
import {OnOff} from "./OnOff";
import {action} from "@storybook/addon-actions";

export default {
    title: 'OnOff',
    component: OnOff
}

const callback = action('on or off clicked')

export const onMode = () => <OnOff on={true} Change={callback}/>
export const offMode = () => <OnOff on={false} Change={callback}/>
export const ChangeMode = () => {
    let [value, setValue] = useState<boolean>(false)
    return (
        <OnOff on={value} Change={setValue}/>
    )
}
