import useFetch from './hooks/useFetch.js';
import './App.css';

function App() {
  const { data, loading, error } = useFetch('https://randomuser.me/api/');

  const name = data?.results?.name?.first;

  return (
    <div className="App">
      <h1>useFetch</h1>
      {name}
    </div>
  );
}

export default App;
