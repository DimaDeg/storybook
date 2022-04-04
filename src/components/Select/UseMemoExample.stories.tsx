import React, {ChangeEvent, useMemo, useState} from "react";


export default {
    title: 'Example Use Memo'
}

export const ExampleUseMemo = () => {

    type cityType = {
        id: number
        title: string
        country: string
        population: number
    }

    const cities: cityType[] = useMemo(()=> [
        {id: 1, title: 'Minsk', country: 'Belarus', population: 2_000_000},
        {id: 2, title: 'Vitebsk', country: 'Belarus', population: 300_000},
        {id: 3, title: 'Moscow', country: 'Russia', population: 12_000_000},
        {id: 4, title: 'Saint-Petersburg', country: 'Russia', population: 10_000_000},
        {id: 5, title: 'Kiev', country: 'Ukraine', population: 2_880_000},
        {id: 6, title: 'Odessa', country: 'Ukraine', population: 993_000},
        {id: 7, title: 'Novolukoml', country: 'Belarus', population: 15_000},
        {id: 8, title: 'Kazan', country: 'Russia', population: 1_169_000},
        {id: 9, title: 'Lvov', country: 'Ukraine', population: 720_000}
    ],[])

    const [value, setValue] = useState('')

    const [counter, setCounter] = useState(0)


    const allCities = useMemo(()=>cities.map(f => <option key={f.id} value={f.id}>{f.title}</option>),[cities])

    const citiesWithM = useMemo(()=>cities.filter(f => f.title.toLowerCase().indexOf('m') > -1)
        .map(s => <option key={s.id} value={s.id}>{s.title}</option>),[cities])

    const cityInBelarus = useMemo(()=>cities.filter(f => f.country === 'Belarus')
        .map(s => <option key={s.id} value={s.id}>{s.title}</option>),[cities])

    const population2_000_000 = useMemo(()=>cities.filter(f => f.population >= 2_000_000)
        .map(s => <option key={s.id} value={s.id}>{s.title}</option>),[cities])


    const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setValue(e.currentTarget.value)
    }
    console.log()
    return (
        <div>
            <div>
                {counter}
                <button onClick={() =>setCounter(counter + 1) }>+</button>
            </div>

            all cities
            <div>
                <select value={value} onChange={onChange}>
                    {allCities}
                </select>
            </div>
            Cities with M
            <div>
                <select value={value} onChange={onChange}>
                    {citiesWithM}
                </select>
            </div>
            Belarus City
            <div>
                <select value={value} onChange={onChange}>
                    {cityInBelarus}
                </select>
            </div>
            2 000 000 population
            <div>
                <select value={value} onChange={onChange}>
                    {population2_000_000}
                </select>
            </div>

        </div>)
}