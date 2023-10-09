
import NewUser from "./Components/NewUser";
import Users from "./Components/users";
import style from "./App.module.css";
import ContextProvider from './Hooks/usersContexthook'

function App() {

  return( 
      
          <ContextProvider>
            <div className={style.App}>
              <NewUser />
              <Users />
           </div>
          </ContextProvider>
  );

}

export default App;
