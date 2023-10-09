import React from 'react';

import useCustomContext from '../Hooks/useCustomContexthooks';
import User from './user';
import style from "./Users.module.css";

const Users = () => {

    const {state} = useCustomContext()

  return (
    <div className= {style.container}>
        {state.users.map((data) =>{
            return <User data ={data} />
        })}
    </div>
  )
}

export default Users;