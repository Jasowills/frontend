import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Navbar />
    <ToastContainer />
    <div className='pages'>
      
      <Routes>
        <Route 
        path='/'
        element={<Home />}
        />
      </Routes>
    </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
