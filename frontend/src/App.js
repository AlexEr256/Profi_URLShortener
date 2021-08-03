
import './App.css';
import {Provider} from 'react-redux'
import store from './redux/index'
import UrlFormContainer from './UrlForm/container/UrlFormContainer';
import AnswersContainer from './Answers/container/AnswersContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App container">
          <UrlFormContainer/>
          <AnswersContainer/>
      </div>
    </Provider>
  );
}

export default App;
