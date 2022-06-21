//작성한 리덕스 모듈을 하나로 묶어서 사용
//redux와 react-redux 두개 설치후 사용
import { combineReducers } from 'redux'
//작성한 리덕스 모듈을 가져옴
import todo from './memo';

const rootReducer = combineReducers({
  todo,
});

export default rootReducer;