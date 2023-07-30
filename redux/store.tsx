import {legacy_createStore as createStore} from 'redux';

import reducer from './reducers/index';

export default function ConfigureStore(initialState: any) {
  const store = createStore(reducer, initialState);
  return store;
}
