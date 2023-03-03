import { useMemo } from 'react';

const Todo = ({lists, complete, remove}) => {
  const todoList = useMemo(() => {
  	return lists || [];
  }, [lists]);
  

	return (
    <ul>
  	{
      todoList.map((item, indx) => {
        return (
          <li key={indx}>{item.name} 
            { item.complete ? 'completed' : <button onClick={() => complete(item.name)}>complete</button> }
            <button onClick={() => remove(item.name)}>remove</button></li>
        )
      })
    }
    </ul>
  )
}

export default Todo;