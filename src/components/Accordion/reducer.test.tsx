import {reducer, StateType, Toggle} from "./Reducer";
import {action} from "@storybook/addon-actions";

test('collapsed should be true',()=>{
    const state: StateType = {
        collapsed: false
    }
    const newState = reducer(state,{type:Toggle})

    expect(newState.collapsed).toBe(true)
})

test('collapsed should be false',()=>{
    const state: StateType = {
        collapsed: true
    }
    const newState = reducer(state,{type:Toggle})

    expect(newState.collapsed).toBe(false)
})

test('should be error because action type error',()=>{
    const state: StateType = {
        collapsed: true
    }

    expect(()=>{reducer(state,{type:'fake'})}).toThrowError()
})