import React, {useState} from "react";
import {action} from "@storybook/addon-actions";
import {Accordion, AccordionPropsType} from "./Accordion";
import {Story} from "@storybook/react";

export default {
    title: 'Accordion',
    component: Accordion
}
const callback = action('accordion mode change event fired')
const callbackOnClick = action('some item was clicked')

const Template: Story<AccordionPropsType> = (args) => <Accordion {...args}/>

export const collapsedMode = Template.bind({})
collapsedMode.args = {
    title: 'Menu',
    collapsed: true,
    onChange: callback,
    items: [],
    onClick: callbackOnClick
}

export const uncollapsedMode = Template.bind({})
uncollapsedMode.args = {
    title: 'Set',
    collapsed: false,
    onChange: callback,
    items: [
        {title: 'Dima', value: 1},
        {title: 'Valera', value: 2},
        {title: 'Artem', value: 3}],

    onClick: callbackOnClick
}

export const ChangingMode = () => {
    let [value, setValue] = useState<boolean>(true)
    return (
        <Accordion title={'Change'} collapsed={value} onClick={callbackOnClick} onChange={() => setValue(!value)}
                   items={[
                       {title: 'Dima', value: 1},
                       {title: 'Valera', value: 2},
                       {title: 'Artem', value: 3}]}/>
    )
}
