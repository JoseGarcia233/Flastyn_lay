import React from 'react';
import NavBar from './components/navBar';
import Post from './components/post';
import AddPost from './components/addPost';

function App() {
  return (

      <div >
             <NavBar/>
        <div className='container'>
          <div className='row'>
            <div className='col-md-8'>
            <Post/>
          </div>
            <div className='col-md-4'>
              <AddPost/>
            </div>
        </div>
        </div>
      </div>
  )
}

export default  App;