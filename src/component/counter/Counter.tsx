import React from 'react'
import './counter.scss'

type ConunterProps = {
    value: number;
    onIncrement: () => void;
    onDecrement: () => void;
    isDisabledIncrement: boolean;
    isDisabledDecrement: boolean;
}

export const Counter = ({ value, onIncrement, onDecrement, isDisabledIncrement, isDisabledDecrement }: ConunterProps) => {
    return (
        <div className='counter'>
            <button
                disabled={isDisabledDecrement}
                onClick={onDecrement}
            >-</button>
            <p>{value}</p>
            <button
                disabled={isDisabledIncrement}
                onClick={onIncrement}
            >+</button>
        </div>
    )
}
