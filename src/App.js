import { Routes, Route } from 'react-router-dom';
import MainApp from './components/MainApp';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainApp />} />
      </Routes>
    </div>
  );
}

export default App;
