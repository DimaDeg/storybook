export type ActionType = {
    type: string
}
export type StateType = {
    collapsed: boolean
}

export const Toggle = 'TOGGLE-COLLAPSED'

export const reducer = (state: StateType, action: ActionType):StateType => {
    switch (action.type) {
        case Toggle:
            return {...state,collapsed: !state.collapsed}
        default:
            throw new Error('Bad Action Type')
            return state
    }
}