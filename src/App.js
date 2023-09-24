import React, { useState } from 'react'
import Register from './components/Register'
import Login from './components/Login';
import { Navigate , Route, Routes,Outlet} from "react-router-dom";
import Todo from './components/TaskCreate';

const PrivateRoute = ({ isAuthenticated, ...props }) => {
  return isAuthenticated ? 
    <>
      <Outlet />
    </> : <Navigate replace to='/register' />
};

const App = () => {

  const [isAuthenticated, setUserAuthenticated] = useState(false);

  return (
    <>
    <Routes >
      <Route path="/" element={<Navigate to="/register" />} />
      <Route exact path="/register" element = {<Register />}></Route>
      <Route exact path="/login" element = {<Login setUserAuthenticated = {setUserAuthenticated} />}></Route>
      <Route path='/home' element= {<PrivateRoute isAuthenticated={isAuthenticated}/>}>
        <Route path='/home' element = {<Todo/>} ></Route>
      </Route>
    </Routes>
      </>
  )
}

export default App
