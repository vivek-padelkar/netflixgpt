import './App.css';
import Body from './components/Body/Body.component';
import { Provider, useDispatch } from 'react-redux';
import store from './utils/store/store.js';


function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Body />
      </Provider>
    </div>
  );
}

export default App;
