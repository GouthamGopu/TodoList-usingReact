import React from 'react';
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { MdEdit } from "react-icons/md";
import { MdOutlineDelete } from "react-icons/md";

const TodoList = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [showFinished, setShowFinished] = useState(false);

  // Load todos from localStorage when the component mounts
  useEffect(() => {
    const todoString = localStorage.getItem("todos");
    if (todoString) {
      const todos = JSON.parse(todoString);
      setTodos(todos);
    }
  }, []);

  // Save todos to localStorage whenever the todos state changes
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleAdd = () => {
    if (todo.trim()) {
      setTodos(prevTodos => {
        const newTodos = [...prevTodos, { id: uuidv4(), todo, isCompleted: false }];
        return newTodos;
      });
      setTodo("");
    }
  };

  const handleEdit = (id) => {
    const index = todos.findIndex(item => item.id === id);
    const selectedTodo = todos[index].todo;
    setTodo(selectedTodo);
    handleDelete(id);
  };

  const handleDelete = (id) => {
    setTodos(prevTodos => {
      const newTodos = prevTodos.filter(item => item.id !== id);
      return newTodos;
    });
  };

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleCheckbox = (id) => {
    setTodos(prevTodos => {
      const newTodos = [...prevTodos];
      const index = newTodos.findIndex(item => item.id === id);
      newTodos[index].isCompleted = !newTodos[index].isCompleted;
      return newTodos;
    });
  };

  const toggleFinished = () => {
    setShowFinished(!showFinished);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAdd();
    }
  };

  return (
    <div>
      <div className="container bg-violet-200 lg:my-5 mx-0 lg:mx-auto min-h-[93vh] lg:min-h-[70vh] p-6 lg:rounded-2xl w-full flex flex-col gap-5 lg:w-[40vw]">
        <div className="header text-lg font-semibold flex flex-col gap-3">
          <span className="text-lg font-bold ">Add a Todo</span>
          <div className="input-section flex items-center gap-3 justify-between">
            <input
              onChange={handleChange}
              type="text"
              value={todo}
              onKeyPress={handleKeyPress}
              className='w-[88%] bg-white rounded-full text-[16px] focus:outline-none px-2'
            />
            <button
              onClick={handleAdd}
              className='rounded-lg bg-violet-800 hover:bg-violet-950 text-white text-sm py-1 px-2 font-bold'
            >
              Add
            </button>
          </div>
        </div>
        <div className="todos flex flex-col gap-2">
          <div className="show-finished flex gap-3">
            <input type="checkbox" className='cursor-pointer' checked={showFinished} onChange={toggleFinished} />
            <span className='font-semibold'>Show Finished</span>
          </div>
          <span className="text-lg font-bold ">Your Todos</span>
          <div className="todos-container">
            {todos.length === 0 && (
              <div className='w-[100%] flex justify-center my-36 font-bold'>
                <span>NO TODO'S TO DISPLAY</span>
              </div>
            )}
            {todos.map(item => (
              (showFinished || !item.isCompleted) && (<div key={item.id} className='flex gap-2 w-[100%] items-center'>
                <input
                  type="checkbox"
                  className='cursor-pointer'
                  onChange={() => handleCheckbox(item.id)}
                  checked={item.isCompleted}
                />
                <div className="todo w-[100%] flex mx-1 my-2 justify-between items-center">
                  <div className="todo-text max-w-[75%] break-all">
                    <span className={item.isCompleted ? 'line-through' : ''}>
                      {item.todo}
                    </span>
                  </div>
                  <div className="buttons flex gap-2">
                    <button
                      onClick={() => handleEdit(item.id)}
                      className='rounded-lg bg-violet-800 hover:bg-violet-950 text-white text-sm py-2 px-2 font-bold flex place-items-center items-center'
                    >
                      <MdEdit />
                    </button>
                    <button
                      onClick={() => handleDelete(item.id)}
                      className='rounded-lg bg-violet-800 hover:bg-violet-950 text-white text-sm px-2 font-bold flex items-center py-2'
                    >
                      <MdOutlineDelete />
                    </button>
                  </div>
                </div>
              </div>)
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TodoList
