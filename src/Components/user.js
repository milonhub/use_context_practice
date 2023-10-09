import React from 'react';

import style from './User.module.css';
import useCustomContext from '../Hooks/useCustomContexthooks'

const User = ({data}) => {

 const { dispatch} = useCustomContext();
 const handleDelete = (id) => {
    dispatch({type:"DELETE_USER", payload:id})
 }
  return (
    <div className={style.card}>
        <h2>{data.id}</h2>
        <p>{data.name}</p>
        <button onClick={()=>{return handleDelete(data.id)}}>Remove</button>
    </div>
  )
}

export default User