import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import { Post } from './components/Post'
import './App.scss';

const store = createStore(()=>[],{}, applyMiddleware())

function App() {

  return (
    <Provider store={store}>
    <>
      <Post />
    </>
    </Provider>
  );
}

export default App;
