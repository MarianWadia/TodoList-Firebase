import React from 'react'
import {FaRegTrashAlt, FaEdit} from 'react-icons/fa'

const styles = {
  li: `bg-slate-300 my-4 rounded p-4 flex flex-row justify-between`,
  liCompleted: `bg-slate-400 my-2 rounded p-4 flex flex-row justify-between`,
  row: `flex flex-row gap-3`,
  text: `font-semibold capitalize cursor-pointer `,
  textCompleted: `font-semibold capitalize cursor-pointer line-through`,
}

function TodoItem({todo, toggleComplete, deleteTodo, updateTodo}) {
  return (
    <div>
        <li className={todo.completed ? styles.liCompleted : styles.li}>
          <div className={styles.row}>
            <input onChange={() => toggleComplete(todo)} type='checkbox' checked = {todo.completed ? "true" : ""}/>
            <p onClick={() => toggleComplete(todo)} className={todo.completed ? styles.textCompleted : styles.text}>{todo.text}</p>
          </div>
          <div>
            <button onClick={()=>updateTodo(todo)}>
              <FaEdit size={20} className='mr-1'/>
            </button>
            <button onClick={()=>deleteTodo(todo)}>
              <FaRegTrashAlt size={20} />
            </button>
          </div>
        </li>
    </div>
  )
}

export default TodoItem