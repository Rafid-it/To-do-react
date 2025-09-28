import React, { useState, useEffect, useMemo } from 'react';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { database } from '/FirebaseConfig';
import { ref, push, onValue, remove, update } from 'firebase/database';

const Todo = () => {
  const TOAST_CONFIG = useMemo(
    () => ({
      position: 'top-right',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'dark',
      transition: Bounce,
    }),
    []
  );

  const [todo, setTodo] = useState('');
  const [allTodo, setAllTodo] = useState([]);
  const [editId, setEditId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const todoRef = ref(database, 'todos');
    onValue(
      todoRef,
      (snapshot) => {
        const data = snapshot.val();
        setAllTodo(data ? Object.entries(data).map(([id, todo]) => ({ id, ...todo })) : []);
        setIsLoading(false);
      },
      (error) => {
        toast.error('Failed to load tasks', TOAST_CONFIG);
        setIsLoading(false);
      }
    );
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    if (!todo.trim()) return toast.error('Please enter a task!', TOAST_CONFIG);

    const todoRef = ref(database, editId ? `todos/${editId}` : 'todos');
    const action = editId ? update : push;

    action(todoRef, { text: todo })
      .then(() => {
        setTodo('');
        setEditId(null);
        toast.success(editId ? 'Task updated!' : 'Task added!', TOAST_CONFIG);
      })
      .catch(() => toast.error(`Failed to ${editId ? 'update' : 'add'} task`, TOAST_CONFIG));
  };

  const handleEdit = (id) => {
    const todoItem = allTodo.find((t) => t.id === id);
    if (todoItem) {
      setTodo(todoItem.text || '');
      setEditId(id);
    } else {
      toast.error('Task not found!', TOAST_CONFIG);
    }
  };

  const handleDelete = (id) => {
    const todoRef = ref(database, `todos/${id}`);
    remove(todoRef)
      .then(() => toast.info('Task deleted!', TOAST_CONFIG))
      .catch(() => toast.error('Failed to delete task', TOAST_CONFIG));
  };

  return (
    <div className=" bg-gray-900 flex items-center justify-center mt-20 p-4">
      <div className="w-full max-w-lg bg-gray-800 rounded-2xl shadow-xl p-6 sm:p-8">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-center text-white mb-6">To-Do List</h1>
        <div className="flex flex-col sm:flex-row gap-3 text-blue-500 mb-6">
          <input
            type="text"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleClick(e)}
            className="flex-1 p-3 border border-white rounded-lg sm:rounded-l-lg sm:rounded-r-none focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
            placeholder="Add or edit a task..."
            aria-label="Task input"
          />
          <button
            onClick={handleClick}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg sm:rounded-l-none sm:rounded-r-lg hover:bg-blue-700 transition duration-200 font-medium"
            aria-label={editId ? 'Update task' : 'Add task'}
          >
            {editId ? 'Update' : 'Add'}
          </button>
        </div>
        {isLoading ? (
          <p className="text-center text-white text-lg">Loading tasks...</p>
        ) : allTodo.length ? (
          <ul className="space-y-3">
            {allTodo.map((item) => (
              <li
                key={item.id}
                className="flex flex-col sm:flex-row items-center justify-between p-4 bg-gray-400 rounded-lg shadow-sm hover:bg-gray-100 transition duration-200"
                aria-label={`Task: ${item.text}`}
              >
                <span className="text-gray-800 text-lg font-medium mb-2 sm:mb-0">{item.text}</span>
                <div className="flex space-x-3">
                  <button
                    onClick={() => handleEdit(item.id)}
                    className="bg-yellow-400 text-white px-4 py-2 rounded-lg hover:bg-yellow-500 transition duration-200 text-sm font-medium"
                    aria-label={`Edit task: ${item.text}`}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-200 text-sm font-medium"
                    aria-label={`Delete task: ${item.text}`}
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center text-white text-lg">No tasks yet!</p>
        )}
        <ToastContainer {...TOAST_CONFIG} />
      </div>
    </div>
  );
};

export default Todo;