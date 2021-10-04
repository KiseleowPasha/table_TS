import {
  InterfaceActionReducerLoadComments,
  InterfaceComment,
  InterfaceCommentsLocalState,
} from './interfaces';

const localState: InterfaceCommentsLocalState = {
  comments: [],
  loaded: false,
};

const LOAD_COMMENTS = 'LOAD_COMMENTS';

export const reducerLoadTable = (
  state = localState,
  action: InterfaceActionReducerLoadComments
) => {
  switch (action.type) {
    case LOAD_COMMENTS:
      return {
        ...state,
        loaded: true,
        comments: [...state.comments, ...action.payload],
      };
    default:
      return state;
  }
};

export const createActionLoadTable = (
  comments: InterfaceComment[]
): InterfaceActionReducerLoadComments => {
  return {
    type: LOAD_COMMENTS,
    payload: comments,
  };
};
