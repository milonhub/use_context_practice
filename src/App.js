import { useState } from "react";

import NewUser from "./Components/NewUser";
import Users from "./Components/users";
import style from "./App.module.css";
import { UsersContext } from "./Hooks/usersContexthook";

const usersData = [
  {id: 1,
  name:"Milon"},
  {
    id:2,
    name:"Zunaid"
  }
]

function App() {

  const [userData, setUserData] = useState(usersData);

  


  return( 
    <UsersContext.Provider value={{userData, setUserData}}>
          <div className={style.App}>
              <NewUser />
              <Users />
           </div>
    </UsersContext.Provider>

  );

  
}

export default App;
