import React, { useContext } from 'react'
import { UsersContext } from '../Hooks/usersContexthook';
import User from './user';
import style from "./Users.module.css";
const Users = () => {
    const {userData} = useContext(UsersContext);
  return (
    <div className= {style.container}>
        {userData.map((data) =>{
            return <User data ={data} />
        })}
    </div>
  )
}

export default Users