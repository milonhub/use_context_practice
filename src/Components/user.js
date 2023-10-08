import React, { useContext } from 'react';

import style from './User.module.css';
import { UsersContext } from '../Hooks/usersContexthook';

const User = ({data}) => {
 const {userData, setUserData} = useContext(UsersContext)
 const handleDelete = (id) => {
    
    const filterdUser = userData.filter((data) => {
      return ( data.id !== id)
    })

    setUserData(filterdUser);

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