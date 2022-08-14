import { deleteDoc, doc } from 'firebase/firestore';
import React from 'react';
import { db, storage } from '../firebaseConfig';
import {toast} from 'react-toastify';
import {deleteObject, ref} from 'firebase/storage';
import '../css/Addpost.css'

export default function RemoveP( {id, imageUrl}) {
  const style1 = {cursor: 'pointer', color :'red'};
  const handleRemove = async() => {
    if(window.confirm('Do yo want to remove this post?')) {
      
    try {
      
        await deleteDoc(doc(db, "PostsV",id))
        toast("This post has been removed correctly.", {type:"success"})
        const storageRef = ref(storage, imageUrl)
        await deleteObject(storageRef)

    } catch (error) {
      toast("We found an error removing the post.", {type:"error"})
      console.log(error);
    }
  }
  }

  return (
    <div>
          <i className='fa fa-times' onClick={handleRemove} style={style1}/>
        
        
    </div>

  )
}
