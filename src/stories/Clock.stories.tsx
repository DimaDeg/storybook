import {Clock} from "../components/Clock/Clock";

export default {
    title: 'Clock',
    component: Clock
};

export const BaseDigitalClock = () => {
    return <Clock mode={'digital'}/>
}

export const BaseAnalogClock = () => {
    return <Clock mode={'analog'}/>
}