// 액션 타입에 INIT 추가
const INIT = 'mbti/INIT';
const CHECK = 'mbti/CHECK';
const NEXT = 'mbti/NEXT';
const RESET = 'mbti/RESET';

// 액션 생성 함수 추가
export function init(data) {
  return {
    type: INIT,
    payload: data,
  };
}

const initStateEmpty = {
  mbtiResult: '',
  page: 0,
  survey: [],
  explanation: {},
};

export default function show(state = initStateEmpty, action) {
  switch (action.type) {
    case INIT:
      return {
        ...state,
        survey: action.payload.survey,
        explanation: action.payload.explanation,
      };
    default:
      return state;
  }
}
