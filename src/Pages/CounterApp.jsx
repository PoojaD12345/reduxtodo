import React from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { counterDec,counterInc } from '../CounterApp/CounterAction';

const CounterApp = () => {

  const dispatch = useDispatch ();
  const count = useSelector ((state)=>state.counter.count)
  return (
    <div>
       <h1>Counter App : {count}</h1>
       <button onClick={()=>dispatch(counterDec())}>-</button>
       <button onClick={()=>dispatch(counterInc())}>+</button>
    </div>
  )
}

export default CounterApp