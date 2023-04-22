import React, { useEffect, useState } from "react";
import {AiOutlinePlus} from 'react-icons/ai';
import {query, collection, onSnapshot, updateDoc, doc, addDoc, deleteDoc} from 'firebase/firestore';
import {db} from './firebase';
import TodoItem from "./TodoItem";

const styles = {
  bg: `min-h-screen max-h-full w-full bg-gradient-to-b from-[#1abc9c] to-[#3498db]`,
  container: `bg-gray-200 p-6 max-w-[600px] w-full m-auto rounded-md shadow-2xl`,
  heading: `text-3xl font-bold text-center`, 
  date: `text-xl mb-2`,
  form: `flex justify-between`,
  input: `w-full p-2 border text-xl`,
  button: `bg-green-600 ml-2 p-4 text-slate-200`,
  count: `text-center text-l p-2`
}

function App() {
  const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday","Saturday"];
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  // * Create a todo in firebase database
  const createTodo = async (e) => {
    e.preventDefault(e);
    if(input === ''){
      alert('Please Enter a valid input 🔎');
      return;
    }

    else if(todos.indexOf(input) !== -1){
      alert('You already have this todo ❕🤔');
      return; 
    }

    else{
      await addDoc(collection(db, 'todos'), {
        text: input,
        completed: false,
      })
    }
    setInput('');
  }


  // * Read data from firebase database
  useEffect(()=>{
    const q = query(collection(db, 'todos'));
    const unsubscribe = onSnapshot(q, (querySnapshot)=>{
      let todoArr = [];
      querySnapshot.forEach((doc)=>{
        todoArr.push({...doc.data(), id: doc.id});
      })
      setTodos(todoArr);
    })
    return () => unsubscribe();
  },[])

  
  // * Update data in firebase database
  const toggleComplete = async (todo) =>{
    await updateDoc(doc(db, 'todos',  todo.id), {
      completed: !todo.completed
    })
  }

  // * Delete todo from firebase database
  const deleteTodo = async (todo) =>{
    await deleteDoc(doc(db, 'todos',  todo.id))
  }
  
  return (
    <div className={styles.bg}>
      <div className={styles.container}>

        <div className={styles.heading}>
          <h1>TODO App☑</h1>
          <h2 className={styles.date}>Hello👋, It's {weekDays[new Date().getDay()]} ! Focus On Your Day !</h2>
        </div>


        <form onSubmit={createTodo} className={styles.form}>
          <input 
            value={input} 
            onChange={(e) => setInput(e.target.value)} 
            type="text" 
            className={styles.input} 
            placeholder="What needs to be done?" />
          <button className={styles.button}><AiOutlinePlus size={30}/></button>
        </form>

        <ul className={styles.ulFields}>
          {todos.map((todo, index) => (
            <TodoItem  key={index} todo={todo} toggleComplete={toggleComplete} deleteTodo={deleteTodo}/>
          ))}
        </ul>

        {todos.length < 1 ? null : (<p className={styles.count}>You Have {todos.length} Todos</p>)}
      </div>
    </div>
  );
}

export default App;
