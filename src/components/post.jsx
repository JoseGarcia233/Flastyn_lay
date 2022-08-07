import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import React, {useState, useEffect} from 'react'
import { db } from '../firebaseConfig';


export default function Post() {
  
  const [post, setPost] = useState([]);

  useEffect(() => {
    const postRef = collection(db, "PostsV");
    const q = query(postRef, orderBy("dateC", "desc"));
    onSnapshot(q,(snapshot)=>{
      const post = snapshot.docs.map((doc) =>({
        id:doc.id,
        ...doc.data(),
      }))
      setPost(post);
      console.log(post);
    })
    
  },[]);

  return (
    <div>
      {

        post.length === 0 ? (
            <p>Not articles here yet</p>
          
        ): (
          post.map(({id,descrip,imageUrl,title,dateC }) => 
          <div className="border mt-3 p-4 bg-light" style={{width:690}}  key={id} >
              <div className="row mx-md-n5">
                <div className="col-3">
                  <img src={imageUrl} alt='title'style={{height:180,width:180}} />
                </div> 
                <div className="col-8 p-3 ps-5">
                  <h2>{title}</h2>
                  <p>{dateC.toDate().toDateString()}</p>
                  <h4>{descrip}</h4>
                </div>
              </div>
          </div>
           ))

      }
    </div>
  )
}

