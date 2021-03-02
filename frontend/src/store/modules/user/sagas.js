import { call, select, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';

function* addUser({ name, email, password }) {
  const userExists = yield select(state =>
    state.user.find(p => p.email === email)
  );

  if (userExists) {
    toast.success('Usuário cadastrado com sucesso!');
  }
}

export default all([takeLatest('@user/ADD_REQUEST', addUser)]);
