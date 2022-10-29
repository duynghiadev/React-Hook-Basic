const Todo = (props) => {
  // properties
  // parent => child
  // top => bottom
  console.log(">>> check props: ", props);
  const todos = props.myData;
  return (
    <div className="todos-container">
      {todos.map((todo) => {
        return (
          <li className="todos-child" key={todo.id}>
            {todo.title}
          </li>
        );
      })}
    </div>
  );
};

export default Todo;
