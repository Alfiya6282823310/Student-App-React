import logo from './logo.svg';
import './App.css';
import AddStudent from './components/AddStudent';
import SearchStudent from './components/SearchStudent';
import DeleteStud from './components/DeleteStud';
import ViewallStudent from './components/ViewallStudent';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/'element={<AddStudent/>} />
      <Route path='/search'element={<SearchStudent/>} />
      <Route path='/delete'element={<DeleteStud/>} />
      <Route path='/view'element={<ViewallStudent/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
