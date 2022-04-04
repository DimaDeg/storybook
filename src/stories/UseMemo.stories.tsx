import React, {useCallback, useMemo, useState} from "react";

export default {
    title: 'useMemo'
}

export const DifficultCountingExample = () => {

    const [a, setA] = useState<number>(0)
    const [b, setB] = useState<number>(0)

    let resultA = 1
    let resultB = 1

    resultA = useMemo(() => {
        let temp = 1
        for (let i = 1; i <= a; i++) {
            let fake = 0
            while (fake < 100_000_000) {
                fake++
                const fakeValue = Math.random()
            }
            temp *= i
        }
        return temp
    }, [a])


    for (let i = 1; i <= b; i++) {
        resultB *= i
    }

    return <>
        <input value={a} onChange={(e) => setA(Number(e.currentTarget.value))}/>
        <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
        <hr/>
        <div>
            Result a = {resultA}
        </div>
        <div>
            Result b = {resultB}
        </div>
    </>

}


const UsersSecret = (props: { users: Array<string> }) => {
    console.log('users secret')
    return <div>
        {props.users.map((f, i) => <div key={i}>{f}</div>)}
    </div>
}

const Users = React.memo(UsersSecret)


export const HelpsToReactMemo = () => {
    console.log('example')
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Dima', 'Artem', 'Ilyu', 'Dre'])

    const newUsersArray = useMemo(()=> users.filter(f=>f.toLowerCase().indexOf("a")>-1),[users])

    const addUser = () => {
        setUsers([...users,'Liza'])
    }

    return (<>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={addUser}>add user</button>
        {counter}
        <Users users={newUsersArray}/>
    </>)
}

