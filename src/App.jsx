import '@fontsource-variable/onest';
import "./index.css"
import Header from './components/Header'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Men from './pages/Men';
import Woman from './pages/Woman';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/men" element={<Men/>} />
          <Route path="/woman" element={<Woman/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
