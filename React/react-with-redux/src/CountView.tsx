import React from 'react'
import { useSelector } from 'react-redux';
import type { RootState } from './redux/store';

const CountView = () => {
   const count = useSelector((state: RootState) => state.counter.count);
   
    return (
        <div>
            <h1>This is count view component</h1>
            <h1>Count: {count}</h1>
        </div>
    );
}

export default CountView