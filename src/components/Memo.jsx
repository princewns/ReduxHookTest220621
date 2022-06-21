
const TodoItem = ({todo, onRemove}) => {
  return(
    <div>
      <span>제목 : {todo.title} </span>
      <button onClick={() => { onRemove(todo.id);}}> X </button>
      <p>내용 : {todo.text}</p>
    </div>
  );
};

//내보낼 Todo
const Todo = ({
  inputTitle,
  inputText,
  todo,
  onChangeInput,
  onInsert,
  onRemove
}) => {
  const onChange = (e) => {
    onChangeInput(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    onInsert(inputTitle,inputText);
    onChangeInput('');
  };
  return(
    <div>
      <h1>메모하는 공간입니다.</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={inputTitle} onChange={onChange}/><br/>
        <textarea value={inputText} onChange={onChange}/><br/>
        <button type="submit">등록</button>
      </form>
      <hr/>
      {
        todo.map((todo) => (
          <TodoItem todo={todo} key={todo.id} onRemove={onRemove} />
        ))
      }
    </div>
  );
};
export default Todo;