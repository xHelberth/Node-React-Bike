import logo from './bikeLogo.jpg';
import './App.css';
import CompShowBikes from './blog/ShowBikes';
import CompCreateBike from './blog/CreateBike';
import CompEditBike from './blog/EditBike';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<CompShowBikes/>}/>
          <Route path='/create' element={<CompCreateBike/>}/>
          <Route path='/edit/:id' element={<CompEditBike/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
