import React from 'react'
import Block from './Components/Block'
import './App.css'

export default function App(){
    const items = [
        {
            id: 1,
            name: 'Бритвенный станок Bic Metal',
            price: 21,
            image: 'https://avatars.mds.yandex.net/get-mpic/364668/img_id7419291113677055065.jpeg/x166_trim'
        },
        {
            id: 2,
            name: 'Вода минеральная Сенежская ',
            price: 130,
            image: 'https://avatars.mds.yandex.net/get-mpic/1081556/img_id5545254895440196313.jpeg/x166_trim'
        },
        {
            id: 3,
            name: 'Карта памяти Samsung MB-MC64GA',
            price: 630,
            image: 'https://avatars.mds.yandex.net/get-mpic/200316/img_id3478969698818197506/x166_trim'
        },
        {
            id: 4,
            name: 'La\'dor шампунь Triple x3 Natural',
            price: 361,
            image: 'https://avatars.mds.yandex.net/get-mpic/1862701/img_id6306059381033073330.jpeg/x166_trim'
        }
    ]
    return (
        <div className='App'>
            {items.map(item => <Block {...item}/>)}
        </div>
    )
}