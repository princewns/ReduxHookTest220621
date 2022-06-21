import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Todos from '../components/Memo'
import { changeInput, remove, insert } from '../modules/memo'

const TodosContainer = () => {
  const { inputTitle, inputText, todo } = useSelector((state) => (
    {
    inputTitle : state.todo.title,
    inputText : state.todo.text,
    todo : state.todo.todo
    }
  ));
  const dispatch = useDispatch();
  const onChangeInput = useCallback((input) => dispatch(changeInput(input)),[dispatch]);
  const onInsert = useCallback((title,text) => dispatch(insert(title,text)),[dispatch]);
  const onRemove = useCallback((id) => dispatch(remove(id)),[dispatch]);
  return <Todos inputText={inputText} inputTitle={inputTitle} todo={todo} onChangeInput={onChangeInput}
  onRemove={onRemove} onInsert={onInsert}/>
};
export default TodosContainer;