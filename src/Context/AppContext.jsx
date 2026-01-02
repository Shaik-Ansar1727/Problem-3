import { createContext } from "react";
import { useReducer } from "react";

export const AppContext = createContext();

const initialState ={
    count:0,
    isLoggedIn : false,
    username:'Guest'
}

function appReducer(state,action){

        switch(action.type){
            case 'Increment':
                return {...state, count :state.count+1};
            case 'Decrement':
                return {...state, count :state.count-1};
            case 'LOGIN':
                return {...state, 
                    isLoggedIn:true,
                    username: action.payload
                };
              case 'LOGOUT':
                return {...state, 
                    isLoggedIn:false,
                    username: 'GUEST'
                } ;
                
              default:
                return state;  
        }

}

export function AppProvider ({children}){
        const [state, dispatch] = useReducer( appReducer, initialState);


    return ( <AppContext.Provider value={{state,dispatch}} >
            {children}
        </AppContext.Provider>
        )
    
}