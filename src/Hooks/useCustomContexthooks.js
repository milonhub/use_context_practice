import {useContext} from 'react';

import { UsersContext } from './usersContexthook';

const useCustomContext = () => {
    
  return useContext(UsersContext);
  
}

export default useCustomContext;