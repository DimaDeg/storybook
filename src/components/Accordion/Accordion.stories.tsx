import React, {useState} from "react";
import {action} from "@storybook/addon-actions";
import {Accordion, AccordionPropsType} from "./Accordion";
import {Story} from "@storybook/react";

export default {
    title: 'Accordion',
    component: Accordion
}
const callback = action('accordion mode change event fired')

const Template: Story<AccordionPropsType> = (args) => <Accordion {...args}/>

export const collapsedMode2 = Template.bind({})
collapsedMode2.args = {
    titleValue: 'Menu',
    collapsed: true,
    changed: callback
}

export const uncollapsedMode2 = Template.bind({})
uncollapsedMode2.args={
    titleValue:'Set',
    collapsed:false,
    changed:callback
}


export const collapsedMode = () => <Accordion titleValue={'Menu'} collapsed={true} changed={callback}/>
export const uncollapsedMode = () => <Accordion titleValue={'Set'} collapsed={false} changed={callback}/>
export const ChangingMode = () => {
    let [value, setValue] = useState<boolean>(true)
    return (
        <Accordion titleValue={'Change'} collapsed={value} changed={() => setValue(!value)}/>
    )
}
