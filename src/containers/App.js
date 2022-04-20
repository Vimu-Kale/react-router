
import UserList from '../components/UserList/UserList';
import { Routes, Route, Navigate } from 'react-router-dom';
import UserDetailsForm from '../components/UserDetailsForm/UserDetailsForm';
import './App.css';
import Header from '../components/Header/Header';
import College from '../components/College/College';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<UserList/>}/>
        <Route path='/userdetailsform' element={<UserDetailsForm/>}/>
        <Route path='/college' element={<College/>}/>
        <Route path='*' element={<Navigate to="/"/>}/>
      </Routes> 

      
      
    </div>
  );
}

export default App;
