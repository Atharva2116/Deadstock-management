import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Add from './components/Add';
import Home from './components/Home';
import Update from './components/Update';
import Delete from './components/Delete';
import Navbar from './components/Navbar'; // Assuming you have a Navbar component

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <section>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add" element={<Add />} />
            <Route path="/update" element={<Update />} />
            <Route path="/delete" element={<Delete />} />
          </Routes>
        </section>
      </div>
    </Router>
  );
}

export default App;
