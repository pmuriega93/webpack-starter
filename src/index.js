import './styles.css';
import { Todo, TodoList } from './classes';
import { crearTodoHtml } from './js/componentes';

export const todoList = new TodoList();

todoList.todos.forEach( todo => crearTodoHtml( todo ) );



// localStorage.setItem('mi-llave', 'ABC1234');
// sessionStorage.setItem('mi-llave', 'ABC1234');

// setTimeout(() => {
//     localStorage.removeItem('mi-llave');
// }, 1500);