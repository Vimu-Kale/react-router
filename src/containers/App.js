
import UserList from '../components/UserList/UserList';
import { Routes, Route, Navigate } from 'react-router-dom';
import UserDetailsForm from '../components/UserDetailsForm/UserDetailsForm';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<UserList/>}/>
        <Route path='/userdetailsform' element={<UserDetailsForm/>}/>
        <Route path='*' element={<Navigate to="/"/>}/>
      </Routes> 

      
      
    </div>
  );
}

export default App;
