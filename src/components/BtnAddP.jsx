import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import {  auth } from '../firebaseConfig';
import { useNavigate } from 'react-router-dom';
import '../css/PostP.css';

export default function BtnAddP() {
  const [user] = useAuthState(auth);
  let nav = useNavigate();
  const handleAddP = () => {
      nav('/addPost');
    
  };

  const handlesingIn = () => {
    nav('/logIn');

  };

  const handlesingUp = () => {
    nav('/singUp');

  };
  
  return (
    <div> 
      {
        !user ?
          <>
              <h4>If you want to add a post please login</h4>
                  <div className="containerbadd1">
                    <button  class="btn btn-info "  onClick={handlesingIn}><h5>Login</h5></button>
                      </div>
                        <div className="containertitle">
                          <h4>Create account</h4>
                            </div>
                              <div className="containerbadd2">
                                <button class="btn btn-info " onClick={handlesingUp}><h5>Singup</h5></button>
                              </div>
                            </>
                          :<>
                          <div className="containertitleadp">
                        <h3>Add Post</h3>
                      </div>
                    <button type="button" class="btn btn-info" onClick={handleAddP}>+</button>
                  </>
                }
            </div>
  )
}
