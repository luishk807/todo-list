import {  useState, useRef } from 'react';
import TodoList from './TodoList';

const MainApp = (props) => {
    const [todoList, setTodoList] = useState([]);
    const inputRef = useRef();
    
    const complete = (id) => {
      const newList = todoList.map(item => {
         if (item.name === id) {
            item.complete = true;
         }
         return item;
      })
      setTodoList(newList)
    }

    const remove = (id) => {
      const newList = todoList.filter(item => item.name !== id)
      setTodoList(newList);
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      const newName = inputRef.current.value;
      inputRef.current.value = '';
      setTodoList((prev) => [...prev, { name: newName, complete: false }]);
    }
    
     return (
     <>
       <form onSubmit={handleSubmit}>
         <input type="text" ref={inputRef}/>
      </form>
      <TodoList lists={todoList} remove={remove} complete={complete} />
      </>
     )
  }
  export default MainApp;