import React, { useState, useContext} from 'react'
import { UsersContext } from '../Hooks/usersContexthook';

const NewUser = () => {

    const [newUser, setNewUser] = useState("");
    const {userData, setUserData} = useContext(UsersContext)

    const handleChange = (event) =>{
         setNewUser(event.target.value)
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        

        const newUsers = {id:new Date().getTime().toString(), name:newUser}
         setUserData([...userData, newUsers])
        setNewUser("");
    }

   
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type='text' value={newUser} onChange={handleChange}></input>
            <button type='submit'>Add</button>
        </form>
    </div>
  )
}

export default NewUser