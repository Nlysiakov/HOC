import { useState, useEffect } from 'react';
import './App.css';
import { TodoListWithLoading } from './TodoList';

export type ToDo = {
  title: string;
};

function App() {
  const [todos, setTodos] = useState<ToDo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((json) => {
        setTodos(json);
        setLoading(false);
      });
  }, []);

  return <TodoListWithLoading isLoading={loading} todos={todos} />;
}

export default App;
