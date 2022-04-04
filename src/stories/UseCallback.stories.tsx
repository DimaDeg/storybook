import React, {useCallback, useMemo, useState} from "react";

export default {
    title: 'useCallback'
}

export const LikeUseCallback = () => {
    const [counter, setCounter] = useState(0)
    const [books, setBooks] = useState(['React', 'JS', 'HTML', 'CSS'])

    const memoizedAddBook = useMemo(()=> {
        return ()=>setBooks([...books,'TS'])},[books])

    const memoizedAddBook1 = useCallback(()=>setBooks([...books,'TS']),[books])

    return (<>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        {counter}
        <Books books={books} addBook={memoizedAddBook1}/>
    </>)
}


const BooksSecret = (props: { books: Array<string>; addBook: ()=>void }) => {
    return <div>
        <button onClick={props.addBook}>add book</button>
        {props.books.map((f, i) => <div key={i}>{f}</div>)}
    </div>
}

const Books = React.memo(BooksSecret)