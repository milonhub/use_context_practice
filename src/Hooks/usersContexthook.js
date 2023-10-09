
import React, {useState, createContext} from 'react'
export const  UsersContext = createContext({});

const ContextProvider = ({children}) => {
     
    const [userData, setUserData] = useState([
        
            {id: 1,
            name:"Milon"},
            {
              id:2,
              name:"Zunaid"
            }
          
        ]);
   
    
  return (<UsersContext.Provider value = {{userData, setUserData}}>
    {children}
  </UsersContext.Provider>
  )
}

export default ContextProvider;