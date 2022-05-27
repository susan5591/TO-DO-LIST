import React, { useState } from 'react'
import { ref,uploadBytesResumable,getDownloadURL,deleteObject } from 'firebase/storage'
import { storage } from '../config'
import './styles/first.css'
import { doc, addDoc ,collection,updateDoc,getDoc} from "firebase/firestore";  
import { db } from '../config';
import Form from './Form';
import List from './List';

const initial={first:'',last:''}
const First = () => {
    const [files,setFiles] = useState(null)
    const [names,setNames] = useState(initial)
    const [edit,setEdit] = useState(false)
    const [id,setId] = useState('')

    const handleUpdate=async(id)=>{
        setEdit(true)
        let editData =await getDoc(doc(db,"crud",id))
        setNames({first:editData.data().first,last:editData.data().last})
        setFiles(editData.data().imageUrl)
        setId(id)
    }
    
    const handleSubmit=(e)=>{
        e.preventDefault()
        if(files){
            const storageRef =ref(storage,`images/${files.name}`)
            const uploadTask = uploadBytesResumable(storageRef, files);
            uploadTask.on('state_changed', (snapshot) => {
                console.log(snapshot)
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
            },
            (error) => {
                console.log("error occured")
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    let data={
                        ...names,
                        imageUrl:downloadURL
                    }
                    if(edit){
                        updateDoc(doc(db,'crud',id),data) 
                            .then(()=>console.log("Data edited"))
                            .catch(()=>console.log("Error occured"))
                    }else{
                        addDoc(collection(db, "crud"), data)
                            .then(()=>console.log("Data uploaded"))
                            .catch(()=>console.log("Error occured"))
                    }
                });
            })
            
        }
        else{
            addDoc(collection(db, "crud"), {
                first:names.first,
                last:names.last,
            })
            .then(()=>console.log("Data uploaded"))
            .catch(()=>console.log("Error occured"))
        }
        setNames(initial)
        setFiles(null)  
        setEdit(false)
        setId('')
    }

    const handleFileChange=(e)=>{
        setFiles(e.target.files[0])
    }

    const handleChange =(e)=>{
        setNames({...names,[e.target.name]:e.target.value})
    }
    // console.log(names)
    console.log(files)
    return (
        <div>
            <div className='main'>
                <Form func={{handleChange,handleFileChange,handleSubmit,names,edit}}/>
            </div>
            <div className='display'>
                <List handleUpdate={handleUpdate}/>
            </div>
        </div>
    )
}

export default First