import {ItemType, Select} from "./Select";
import React, {ChangeEvent, useState} from "react";
import {Story} from "@storybook/react";
import {action} from "@storybook/addon-actions";


export default {
    title: 'Select',
    component: Select

}

export const WithValue = ()=>{
    const [value,setValue] = useState('1')


    return <Select value={value} onChange={setValue} items={[
        {title: 'Minsk', value: '1'},
        {title: 'Kiev', value: '2'},
        {title: 'Moscow', value: '3'}]}/>
}

export const WithoutValue = ()=>{
    const [value,setValue] = useState('')
    return <Select value={value} onChange={setValue} items={[
        {title: 'Minsk', value: '1'},
        {title: 'Kiev', value: '2'},
        {title: 'Moscow', value: '3'}]}/>
}