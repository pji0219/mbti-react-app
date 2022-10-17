// 초기 상태 설정
const initState = {
  mbtiResult: '',
  page: 0,
};

// 액션 타입
const CHECK = 'mbti/CHECK';
const NEXT = 'mbti/NEXT';
const RESET = 'mbti/RESET';

// 액션 생성 함수
export function next() {
  return {
    type: NEXT,
  };
}

export function check(result) {
  return {
    type: CHECK,
    payload: { result },
  };
}

export function reset() {
  return {
    type: RESET,
  };
}

// 리듀서
export default function mbti(state = initState, action) {
  switch (action.type) {
    case CHECK:
      return {
        ...state,
        mbtiResult: state.mbtiResult + action.payload.result,
      };
    case NEXT:
      return {
        ...state,
        page: state.page + 1,
      };
    case RESET:
      return {
        ...state,
        page: 0,
        mbtiResult: '',
      };
    default:
      return state;
  }
}
