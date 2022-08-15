import React, {useState}from 'react'
import { Timestamp, collection, addDoc } from 'firebase/firestore'
import {ref, uploadBytesResumable, getDownloadURL} from 'firebase/storage'
import { storage, db, auth } from '../firebaseConfig';
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import '../css/Addpost.css'

export default function AddPost() {
  const style1 ={position: 'fixed', };
  let nav = useNavigate();
  const [user] = useAuthState(auth);

  const[dataFrm, setDataFrm] = useState({
    title: "",
    descrip: "",
    imageUrl: "",
    dateC: Timestamp.now().toDate(),
  });

  const [progress, setProgress] = useState(0);
  
  const handleChange=(e) => {
    setDataFrm({ ...dataFrm,[e.target.name]: e.target.value});

  };

  const handleImageChange=(e) => {
    setDataFrm({ ...dataFrm, imageUrl: e.target.files[0]});
  };

  const handlePost = () => {
    if(!dataFrm.title || !dataFrm.descrip || !dataFrm.imageUrl){
      alert("you shloud complete all the fields");
      return;

    }
    const storageRef = ref(storage, `/images/${Date.now()}${dataFrm.imageUrl.name}`);

    const uploadImage =uploadBytesResumable(storageRef, dataFrm.imageUrl);
      
    uploadImage.on("state_changed", (snapshot) => {
      const progressPercent = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100
      );
        setProgress(progressPercent);
    }, (err)=>{
      console.log(err);
    }, 
      ()=>{
        setDataFrm({
          title:"",
          descrip: "",
          imageUrl:"",

        });

        getDownloadURL(uploadImage.snapshot.ref).then((url)=>{
          const postRef = collection(db, "PostsV");
          addDoc(postRef, {
            title: dataFrm.title,
            descrip: dataFrm.descrip,
            imageUrl: url,
            dateC: Timestamp.now().toDate(),
            postCreator: user.displayName,
            like:[],
            idUser: user.uid,
          })
          .then(()=>{
            toast("the post have been added correctly", {type:"success"});
            setProgress(0);
            nav('/');
          })
          .catch(err =>{
            toast("An error has occurred adding the post", {type:"error"});

          });

        });

      }    
    );
  };

return ( 
  

  <div className="containerAd"> 
    <div className='border p-5 mt-3  mb-6 bg-light' style={style1}>
      <div className='containerh2'>
        <h2>Create Post</h2>
      </div>
          <div className='containerlab1'>
            <label htmlFor='Title' className='title'>Title</label>
              <input type="text" name="title" className='form-control' placeholder='Please Write your Title' value={dataFrm.title} onChange={(e)=>handleChange(e)}/>
          </div>
            {/* descip */}
            <div className='containerlab1'>
              <label htmlFor="Description">Description</label>
                  {/* img */}
                <textarea name="descrip" className='form-control'  placeholder='Please Write your Description' value={dataFrm.descrip} onChange={(e)=>handleChange(e)}/>
                  <label htmlFor="Image">Image</label>
                    <input type="file" name="image" accept="image/*" className="form-control"  onChange={(e)=>handleImageChange(e)}/>
            </div>

              {progress=== 0 ? null : (
                <div className="progress">
                  <div className="progress-bar progress-bar-striped mt2" style={{width:`${progress}% `}}>
                    {`image is in progress ${progress}%`}
                </div>
                  </div>
    
    )}
    
    <button className='form-control  btn btn-outline-info mt-2' onClick={handlePost}>Send</button>
    </div>
</div>   
)
}

