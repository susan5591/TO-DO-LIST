import React, {  useCallback, useEffect, useState } from 'react'
import { db } from '../config';
import { doc,collection,deleteDoc,onSnapshot,updateDoc} from "firebase/firestore";  
import './styles/list.css'
import user from '../images/user.jpg'
// import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const List = ({handleUpdate}) => {
    const [datas,setDatas]=useState([])

    const getData=useCallback(()=>onSnapshot(collection(db,"crud"),(querySnapShot)=>{
        let rows =[]
        querySnapShot.forEach((doc) => {
            rows.push({...doc.data(),id:doc.id})
        });
        setDatas(rows)
    }),[])
        
    useEffect(()=>{
        getData()
    },[getData])

    const handleDelete=async(id)=>{      
        await deleteDoc(doc(db, "crud", id));
    }
    console.log(datas)
  return <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableBody>
            {datas.map((row) => (
                <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                <TableCell align="right">{row.first}</TableCell>
                <TableCell align="right"><span className='head'><img className="imaging" src={row.imageUrl?row.imageUrl:user} alt='image'/></span></TableCell>
                <TableCell align="right"><button onClick={()=>handleUpdate(row.id)} className='update'>Update</button></TableCell>
                <TableCell align="right"><button onClick={()=>handleDelete(row.id)} className='delete'>Delete</button></TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
    </TableContainer>  
}

export default List