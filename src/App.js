import { ResultPage } from './pages/ResultPage';
import './styles/App.css';
const fakeArr = [1, 2, 3, 4]
function App() {
  return (
    <div className="App">
      <ResultPage data={fakeArr} />
    </div>
  );
}

export default App;
