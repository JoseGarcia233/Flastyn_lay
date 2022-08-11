import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import React, {useState, useEffect} from 'react'
import { db } from '../firebaseConfig';
import RemoveP from './RemoveP';



export default function Post() {
  const style1 = {width:690};
  const styleImg ={height:180,width:180};
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
          <div className="container">
            <div className="border mt-3 p-4 bg-light" style={style1}  key={id} >
                <div className="row mx-md-n5">
                    <div className="col-3">
                      <img src={imageUrl} alt='title' class="rounded border border-white" style={styleImg} />
                </div> 
                  <div className="col-8 mt-4 ms-3 ps-5">
                    <h2>{title}</h2>
                    <p>{dateC.toDate().toDateString()}</p>
                    <h4>{descrip}</h4>
                  <RemoveP id={id} imageUrl={imageUrl}/>
                </div>
              </div>
            </div>
          </div>
            ))

      }
    </div>
  )
}

