import React, { useState } from 'react'
import Item from './item';
import Footer from './Footer';
export default function Todo(props) {
  const [todo,settodo]=useState({name:"",done:false});
  const [todos,settodos]=useState([]);
  const complete=todos.filter((todo)=>todo.done).length
  const todocount=todos.length
  function handle(e){
    e.preventDefault(); 
    settodos([...todos,todo])
    settodo({name:"",done:false})
   }
   const sortedtodo=todos.slice().sort((a,b)=>Number(a.done)-Number(b.done))
  return (
    <div>
      <form onSubmit={handle} className='todoform'>
    <input type="text" className='moderninput' value={todo.name} placeholder='enter todo item...'  onChange={(e)=>(settodo({name:e.target.value,done:false}))} ></input>
    <button type="submit" className='modernbutton'>ADD</button>
    </form>
   <div>{sortedtodo.map((item)=>(<Item item={item} key={item.name} todos={todos} settodos={settodos} ></Item>))}</div>
     <Footer complete={complete} todocount={todocount}></Footer>
  </div>
  )
}