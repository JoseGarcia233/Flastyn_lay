import React, {useState} from 'react';
import '../../css/SingUp.css';
import { useNavigate } from 'react-router-dom';
import{createUserWithEmailAndPassword, updateProfile} from 'firebase/auth';
import { auth } from'../../firebaseConfig';
import {toast} from 'react-toastify';

export default function SingUp() {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  let nav = useNavigate();
  

  const handleSing = async ()  =>{

    try {
      await createUserWithEmailAndPassword(auth,email,password);
      updateProfile(auth.currentUser,{displayName:name, lastName});
      toast("your account has been created successfully", {type:"success"});
      nav('/');

    } catch (error) {
      toast(error.code, {type: 'error'});
    }
  }

  return (
    <div className='containerS'>
      <div className='boder p-5 mb-6 bg-light' >
          <div className="containerH">
            <h1>SingUp</h1>
          </div>
          <div className='form-group'>
            <div className="containerLab">
              <label>Name</label>
                <input type='text' className='form-control' placeholder='Please Write your name' onChange={(e) =>{setName(e.target.value)}} required/>
            </div>
          </div>

            <div className='form-group'>
              <div className="containerLab">
                <label>Last Name</label>
                  <input type='text' className='form-control' placeholder='Please Write your Last Name' onChange={(e) =>{setLastName(e.target.value)}} required/>
              </div>
            </div>

            <div className='form-group'>
              <div className="containerLab">
                <label>User Email</label>
                  <input type='email' className='form-control' placeholder='Please Write your Email' onChange={(e) =>{setEmail(e.target.value)}} required/>
              </div>
            </div>

              <div className='form-group'>
                <div className="containerLab">
                  <label>Password</label>
                    <input type='password' className='form-control' placeholder='Please Write your Password' onChange={(e) =>{setPassword(e.target.value)}} required />
                </div>
            </div>
              <br/>  
              <div className="containerb">
                <button type='submit' className='btn btn-outline-info'onClick={handleSing} >Singup</button> 
              </div>
      </div>
    </div>
  )
}
