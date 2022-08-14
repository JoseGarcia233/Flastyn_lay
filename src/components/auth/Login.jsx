import React, {useState} from 'react'
import {signInWithEmailAndPassword} from'firebase/auth';
import { auth } from'../../firebaseConfig';
import { useNavigate } from 'react-router-dom';
import {toast} from 'react-toastify';
import '../../css/Login.css';

export default function Login() {

  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  let nav = useNavigate();
  const handleLog= async ()  =>{

    try {
      await signInWithEmailAndPassword(auth,email,password);
      nav('/');

    } catch (error) {
      toast(error.code, {type: 'error'});
    }
  }
  return (
    <div className="containerL">
      <div className=" boder p-2 mb-6  mx-auto bg-light "> 
          <div className="containerHL">
            <h1>Login</h1>
              </div>
                <div className='form-group'>
                  <div className="containerLabl">
                    <label>User Email</label>
                      <input type='email' className='form-control' placeholder='Please Write your Email' onChange={(e) =>{setEmail(e.target.value)}} required/>
                        </div>
                          </div>
                            <div className='form-group'>
                          <div className="containerLabl">
                        <label>Password</label>
                      <input type='password' className='form-control' placeholder='Please Write your Password' onChange={(e) =>{setPassword(e.target.value)}} required />
                    </div>
                  <br/>  
                <div className="containerb">
              <button type='submit' className='btn btn-outline-info'onClick={handleLog}>Loing</button> 
            </div>
          </div>
        </div>
    </div>
  )
}
