import React, {useState} from 'react';
import './App.css';
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {Accordion} from "./components/Accordion/Accordion";
import {ExampleUseMemo} from "./components/Select/UseMemoExample.stories";

function App() {

    console.log("App rendering")
    return (
        <div className={'app'}>
            <ExampleUseMemo/>
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
