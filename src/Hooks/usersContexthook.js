
import React, {useReducer, createContext} from 'react'
import reducer, { initialValues } from '../UseReducer/Reducer';
export const  UsersContext = createContext({});

const ContextProvider = ({children}) => {
     
  const [state, dispatch] = useReducer(reducer, initialValues)
   
    
  return (<UsersContext.Provider value = {{state, dispatch}}>
    {children}
  </UsersContext.Provider>
  )
}

export default ContextProvider;