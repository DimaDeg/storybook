import React, {useState} from "react";
import {action} from "@storybook/addon-actions";
import {Rating, RatingValueType} from "./Rating";

export default {
    title: 'Rating',
    component: Rating
}

const callback=action('Set rating star')

export const EmptyStar = () => <Rating value={0} onClick={callback}/>
export const Rating1Star = () => <Rating value={1} onClick={callback}/>
export const Rating2Star = () => <Rating value={2} onClick={callback}/>
export const Rating3Star = () => <Rating value={3} onClick={callback}/>
export const Rating4Star = () => <Rating value={4} onClick={callback}/>
export const Rating5Star = () => <Rating value={5} onClick={callback}/>
export const ChangingRating = () => {
    let [rating,setRating]=useState<RatingValueType>(3)
    return(
    <Rating value={rating} onClick={setRating}/>)

}