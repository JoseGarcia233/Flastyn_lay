import { deleteDoc, doc } from 'firebase/firestore';
import React from 'react';
import { db, storage } from '../firebaseConfig';
import {toast} from 'react-toastify';
import {deleteObject, ref} from 'firebase/storage';

export default function RemoveP( {id, imageUrl}) {
  const handleRemove = async() => {
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

  return (
    <div>
          <button className='btn btn-outline-danger' onClick={handleRemove}>Remove</button>
        
        
    </div>

  )
}
