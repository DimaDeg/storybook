import React, {useState} from "react";

export default {
    title: 'React.memo demo'
}

const Counter = (props: { count: number }) => {
    console.log('1')
    return <div>{props.count}</div>
}
const UsersSecret = (props: { users: Array<string> }) => {
    console.log('2')
    return <div>
        {props.users.map((f, i) => <div key={i}>{f}</div>)}
    </div>
}


const NewMassageCounter = React.memo(Counter)
const Users = React.memo(UsersSecret)


export const Example1 = () => {
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['ab', 'bc', 'cd'])
    const addUser = () => {
        setUsers([...users,'add'])
    }
    return (<>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={addUser}>addUser</button>
        <NewMassageCounter count={counter}/>
        <Users users={users}/>
    </>)

}