import React from 'react'
import State from './State'

export default function UnitStates(props) {
    return (
        <div className="ProductCardStats">
            <State state={props.price} value='price' />
            <State state={props.off} value='off' />
            <State state={props.tax} value='tax' />
        </div>
    )
}
