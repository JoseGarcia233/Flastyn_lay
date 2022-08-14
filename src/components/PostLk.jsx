import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth,  db } from '../firebaseConfig';
import { arrayRemove, arrayUnion, doc, updateDoc} from 'firebase/firestore'

export default function PostLk({id, like}) {
  const [user] = useAuthState(auth);
  const style1 = {cursor : 'pointer',color:like?.includes(user.uid)? "red":null }
  const likeRef =  doc(db, "PostsV", id);

  const handlelk = () => {
    if(like?.includes(user.uid)){
      updateDoc(likeRef, {
        like:arrayRemove(user.uid)
      }).then(() => {
        console.log("Not like");
      }).catch((e) => {console(e);});
    }
    else {
      updateDoc(likeRef, {
        like: arrayUnion(user.uid)
      }).then(() => {
        console.log("you liked");
      }).catch((e) => {console(e);});
    }
  };

  return (
    <div>
      <i className={`fa fa-heart${!like?.includes(user.uid)? "-o":""} fa-lg`} style={style1} onClick={handlelk}/>
    </div>
  )
}
