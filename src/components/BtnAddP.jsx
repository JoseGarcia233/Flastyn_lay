import React from 'react'
import {Link} from 'react-router-dom'
import '../css/PostP.css';

export default function BtnAddP() {
  return (
    <div className='ButtonD'> 
      <h3>Add Post</h3>
        <button type="button" class="btn btn-info"><Link to='/addPost' >+</Link></button>

    </div>
  )
}
