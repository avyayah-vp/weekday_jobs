import { Provider } from 'react-redux';
import './App.css';
import SearchJobs from './pages/SearchJobs';
import store from './redux/store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <SearchJobs />
      </Provider>
    </div>
  );
}

export default App;
