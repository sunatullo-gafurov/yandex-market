import React from 'react'

export default function Block(props) {
    const {name, price, image} = props;
    return (
        <div>
            <div className="item">
                <div><img src={image} alt='' /></div>
                <div><span className="price">{price} ₽</span></div>
                <div><a href="#">{name}</a></div>
            </div>
        </div>
    )
}