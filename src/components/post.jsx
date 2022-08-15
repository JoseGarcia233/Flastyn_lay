import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import React, {useState, useEffect} from 'react'
import { db, auth } from '../firebaseConfig';
import RemoveP from './RemoveP';
import { useAuthState } from 'react-firebase-hooks/auth';
import PostLk from './PostLk';


export default function Post() {
  const style1 = {width:690};
  const styleImg ={height:180,width:180};
  const [post, setPost] = useState([]);
  const [user] = useAuthState(auth);

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
    <div className='container'>
      {
        post.length === 0 ? (
            <p>we dont found post yet</p>
          
        ): (
          post.map(({id,descrip,imageUrl,title,dateC,postCreator,idUser,like }) => 
          <div className="container">
            <div className="border mt-3 p-4 bg-light" style={style1}  key={id} >
                <div className="row mx-md-n5">
                    <div className="col-3">
                      <img src={imageUrl} alt='title' class="rounded border border-white" style={styleImg} />
                      </div> 
                      <div className="col-8 mt-4 ms-3 ps-5">
                        
                        <div className="row">
                          <div className="col-6">
                          {
                            postCreator &&(
                              <span className="badge bg-info"><h6>{postCreator}</h6></span>
                            )
                          }
                          </div>
                          <div className="col-6 d-flex flex-row-reverse">
                            {
                              user && user.uid === idUser && (
                                <RemoveP id={id} imageUrl={imageUrl}/>
                              )
                            }
                          </div>
                        </div>
                        <h3>{title}</h3>
                          <p>{dateC.toDate().toDateString()}</p>
                          <h4>{descrip}</h4>
                        <div className="d-flex flex-row-reverse">
                      {user && <PostLk id={id} like={like}/>}
                    </div>
                </div>
              </div>
            </div>
          </div>
            ))

      }
    </div>
  )
}

