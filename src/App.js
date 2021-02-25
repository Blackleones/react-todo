import './App.css';
import Header from './components/Header';
import TodoForm from './components/TodoForm';
import { TodoList } from './components/TodoList';
import { TodoProvider } from './context/Todo';

function App() {
  return (
    <>
      <Header />
      <div className="m-2">
        <TodoProvider>
          <TodoForm />
          <TodoList />
        </TodoProvider>
      </div>
    </>
  );
}

export default App;
