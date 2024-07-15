import React from 'react'
import styles from "./inline.module.css"
export default function Item(props) {
  function Delete(){
    props.settodos(props.todos.filter((todo)=>todo!=props.item))
    console.log("delete item "+props.item.name+" "+props.item.done)
  }
  return (
    <div className='list'><span className={props.item.done?styles.colors:""} onClick={()=>{
      console.log("item clicked"+props.item.name)
    const arr= props.todos.map((todo)=>todo.name===props.item.name ?{...todo,done:!todo.done}:todo)
    props.settodos(arr);
    console.log(props.todos)
    }}>{props.item.name}</span>
   <span><button className="delete" onClick={Delete} >X</button></span>
  </div>
  )
}