import React,{useRef} from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { addTodo, completeTodo, deleteTodo } from '../TodoApp/TodoAction';


const TodoApp = () => {
    const dispatch = useDispatch ();
    const todos = useSelector ((state)=>state.todo.todos)
    const ref = useRef();

    const addNew =()=>{
        let value =ref.current.value;
        dispatch(
            addTodo({
            value:value,
            isCompleted : false

        })
        );
        ref.current.value=null;
    }
    const handleDelete=(e)=>{
      // console.log(e)
      dispatch(
        deleteTodo(e)
      )
    }
    const handleComplete=(e)=>{
         dispatch(
           completeTodo(e)
         )
    }
  return (
 <h1>
        <div>
        <input
        ref={ref}
        type="text"
        placeholder='Enter Task'
        />
        <button onClick={addNew}>Add</button>
    </div>
   
    <br></br>
    {console.log(todos)}
    {todos.map((todo)=> {
         return (
         <>
         <div style={{display:"flex"}}>
           <input type="checkbox" onClick={()=>handleComplete(todo.id)}/>
         
         <div key={todo.id}>{todo.value}</div>
         <button onClick={()=>handleDelete(todo.id)}>Delete</button>
         </div>
         </>
         )
    })}
 </h1>
  )
}

export default TodoApp;