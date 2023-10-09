export const initialValues = {
    users:[
        
        {id: 1,
        name:"Milon"},
        {
          id:2,
          name:"Zunaid"
        }
      
    ]
}


const reducer = (state, action) =>{
   switch(action.type) {
    case "ADD_user" : 
    return {
        ...state,
        users: [...state.users, action.payload],
    }

    case "DELETE_USER" :

    const filterdUser = [...state.users].filter((user)=>{
        return user.id !== action.payload;
    })
        return {
            ...state,
          users:filterdUser
        }

        default: return state;
   }
}

export default reducer;