// cписок задач
import Todo from "./Todo";
// Todo это стилизированный див в который передается переменная todo и отображается список задач
import styles from "./TodoList.module.css";
function TodoList({ todos, deleteTodo }) {
  // const {todos} = props деструктуризация но так как она одна можно выполнить непосредственно в блооке тудулист
  return (
    <div className={styles.todoListContainer}>
      {!todos.length && <h2>Список задач пуст</h2>}
      {todos.map((todo, index) => (
        <Todo key={index} todo={todo} index={index} deleteTodo={deleteTodo} />
      ))}
    </div>
  );
}
export default TodoList;
