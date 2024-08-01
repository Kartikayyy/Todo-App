"use client";
import { useState } from "react";
import { TodoObject } from "@/models/Todo";
import { v4 as uuid } from 'uuid';

const Home: React.FunctionComponent = () => {
  const [todo, setTodo] = useState<string>('');
  const [todos, setTodos] = useState<TodoObject[]>([]);

  const addTodo = () => {
    setTodos([{ id: uuid(), value: todo, done: false }, ...todos]);
    setTodo("");
  }

  const markTodoDone = (id: string) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, done: !todo.done } : todo));
  }

  return (
    <>
      <header className="bg-gradient-to-r from-indigo-700 to-blue-800 p-6 shadow-lg">
        <h1 className="text-4xl text-white font-bold">TODO - LIST</h1>
      </header>
      <main className="p-6 bg-gray-900 min-h-screen text-gray-100">
        <div className="flex items-center mb-6">
          <input type="text" placeholder="Enter a task"
            className="text-lg text-gray-900 p-3 rounded-lg border-2 border-gray-700 shadow-sm"
            style={{ width: '25%' }}
            onChange={(e) => setTodo(e.target.value)}
            value={todo} />
          <button type="button"
            className="ml-4 px-6 py-3 text-white bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 focus:ring-2 focus:outline-none focus:ring-cyan-500 dark:focus:ring-cyan-800 font-medium rounded-lg text-lg shadow-md"
            onClick={() => addTodo()}>
            Add Task
          </button>
        </div>
        <ul className="mt-5 space-y-4 max-w-md">
          {
            todos.map(todo => (
              <li key={todo.id}
                onClick={() => markTodoDone(todo.id)}
                className={`text-2xl p-2 rounded-md cursor-pointer transition-colors duration-200 ${todo.done ? 'line-through text-gray-500' : 'no-underline text-gray-200'} hover:bg-gray-800`}>
                {todo.value}
              </li>
            ))
          }
        </ul>
      </main>
    </>
  );
}

export default Home;
