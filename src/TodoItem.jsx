import React from 'react'
import {FaRegTrashAlt} from 'react-icons/fa'

const styles = {
  li: `bg-slate-300 my-1.5 rounded p-4 flex flex-row justify-between`,
  liCompleted: `bg-slate-400 my-2 rounded p-4 flex flex-row justify-between`,
  row: `flex flex-row gap-3`,
  text: `font-semibold capitalize cursor-pointer `,
  textCompleted: `font-semibold capitalize cursor-pointer line-through`,
}

function TodoItem({todo, toggleComplete, deleteTodo}) {
  return (
    <div>
        <li className={todo.completed ? styles.liCompleted : styles.li}>
          <div className={styles.row}>
            <input onChange={() => toggleComplete(todo)} type='checkbox' checked = {todo.completed ? "true" : ""}/>
            <p onClick={() => toggleComplete(todo)} className={todo.completed ? styles.textCompleted : styles.text}>{todo.text}</p>
          </div>
          <button onClick={()=>deleteTodo(todo)}>
            <FaRegTrashAlt />
          </button>
        </li>
    </div>
  )
}

export default TodoItem