import React from 'react';
import NavBar from './components/navBar';
import Post from './components/post';
import AddPost from './components/addPost';
import BtnAddP from './components/BtnAddP';
import SingUp from './components/auth/SingUp';
import Login from './components/auth/Login';
import './css/PostP.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (

      <div >
        <Router>
          <NavBar/>
            <Routes>
              <Route path='/addPost' element={<AddPost/>}  />
                <Route path='/singUp' element={<SingUp/>} /> 
                  <Route path='/logIn' element ={<Login/>} />
                    <Route path='/' element={
                    <div className='container'>
                      <div className='row'>
                        <div className='col-md-11'>
                        <Post/>
                    </div>
                  <div className='colum2'>
                  <BtnAddP/>
                </div>
              </div>
            </div>
            }/>
          </Routes>
        
        </Router>
      </div>
  )
}

export default  App;