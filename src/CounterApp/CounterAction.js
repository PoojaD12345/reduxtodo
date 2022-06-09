import { COUNTER_DECREMENT, COUNTER_INCREMENT } from "./CounterAction.types";



export const counterInc=()=>({type:COUNTER_INCREMENT});
export const counterDec=()=>({type:COUNTER_DECREMENT});

// export const counterInc = ()=>({type:COUNTER_DECREMENT})
// export const counterDec = ()=>({type:})