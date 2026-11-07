import { withLoading } from './withLoadingHOC';
import { ToDo } from './App';

type Props = {
  todos: ToDo[];
};

const TodoList = ({ todos }: Props) => {
  return (
    <ol>
      {todos.map((todo) => (
        <li>{todo.title}</li>
      ))}
    </ol>
  );
};

export const TodoListWithLoading = withLoading(TodoList);
