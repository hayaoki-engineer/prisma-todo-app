import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";


export default function Home() {
  return (
    <div>
      <h1>TODOアプリ</h1>
      <TodoForm />
      <TodoList />
    </div>
  );
}
