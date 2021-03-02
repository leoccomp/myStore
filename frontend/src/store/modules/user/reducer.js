import produce from 'immer';

export default function user(state = [], action) {
  switch (action.type) {
    case '@user/ADD_REQUEST':
      return produce(state, draft => {
        const { user } = action;

        draft.push(user);
      });
    default:
      return state;
  }
}
