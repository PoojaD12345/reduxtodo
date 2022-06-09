
import { ADD_TODO, COMPLETE_TODO, DELETE_TODO, UPDATED_TODO } from "./TodoAction.types";



export const todoReducer =(state={todos:[]},{type,payload})=>{
    switch(type){
        case ADD_TODO:{
            // state.todos.push({
            //     ...payload,
            //     id:state.todos.length,
            // });
            return{...state,
                todos:[
                    ...state.todos,
                    {
                        ...payload,
                        id:state.todos.length
                    }
                ]
            };
        }
        case DELETE_TODO:{
            const deleted_data=state.todos.filter((e)=>e.id!==Number(payload))
            state.todos=deleted_data;
            return{...state};
        }
        case COMPLETE_TODO:{
            const complete=state.todos.filter((e)=>e.id!==Number(payload))
            console.log(complete[0].value)
            // state.todos=complete;
            {<p>{complete[0].value}</p>}
            return{...state};
        }
        case UPDATED_TODO:{
            let newTodos = state.todos.map(todo =>{
                if(todo.id === payload.id){
                    return payload;
                }
                else{
                    return todo;
                }
            })
            return{...state,todos:newTodos};
        }
        default :{
            return state;
        }
    }
}