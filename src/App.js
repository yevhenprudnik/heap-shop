import { Routes, Route } from 'react-router-dom';
import Navigation from './components/navigation/navigation.component';
import Home from './routes/home/home.component';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="test-1" element={<h1>Test 1</h1>} />
        <Route path="test-2" element={<h1>Test 2</h1>} />
        <Route path="test-3" element={<h1>Test 3</h1>} />
      </Route>
    </Routes>
  );
}

export default App;
