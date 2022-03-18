import React, {useState} from 'react';
import './App.css';
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {Accordion} from "./components/Accordion/Accordion";

function App() {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true)
    console.log("App rendering")
    return (
        <div className={'app'}>
            <Rating value={ratingValue} onClick={setRatingValue}/>


            <Accordion titleValue={'Menu'}
                       collapsed={accordionCollapsed}
                       changed={() => {
                           setAccordionCollapsed(!accordionCollapsed)
                       }}/>
        </div>
    );
}

type PageTitlePropsType = {
    title: string;
}

function PageTitle(props: PageTitlePropsType) {
    console.log("PageTitle rendering")
    return <h1>{props.title}</h1>
}

export default App;
