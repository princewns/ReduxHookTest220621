
const CHANGE_INPUT = 'todo/CHANGE_INPUT';
const INSERT = 'todo/INSERT_TITLE';
const REMOVE = 'todo/REMOVE'; 


export const changeInput = (input) => ({
  type : CHANGE_INPUT,
  input
});
let id = 3;
export const insert = (title, text) => ({
  type : INSERT,
  todo : {
    id : id++,
    title,
    text
  }
});
export const remove = (id) => ({
  type : REMOVE,
  id
});

const initialState = {
  input : '',
  todo : [
    {
      id : 1,
      title : '첫번째',
      text : '첫번째 할일입니다.',
    },
    {
      id : 2,
      title : '두번쨰',
      text : '두번째 할일입니다.',
    }
  ]
};

function todo(state = initialState, action) {
  switch(action.type) {
    case CHANGE_INPUT :
      return{
        ...state,
        input : action.input
      };
    case INSERT :
      return{
        ...state,
        todo : state.todo.concat(String(action.todo))
      };
    case REMOVE :
      return{
        ...state,
        todo : state.todo.filter(
          (todo) => todo.id !== action.id
        )
      };
      default:
        return state;
  };
};
export default todo;