import { counter } from "@fortawesome/fontawesome-svg-core";
import { CHANGE_THEME, COUNTER } from "../Types/types";

const changeTheme = (state={color:"",lay:"",counter:0},action)=>{

    if(action.type == CHANGE_THEME){

        const color = "black"
       const  toggled =""
        return {
            ...state,
            color:state.color === '#090631' ? "white" : "#090631",
            lay:state.lay === '#090631' ? "#ECECEC" : "#090631"
        }
    }


    
    if(action.type == COUNTER){

      const newCount=44
        return {
            ...state,
            counter:newCount,
           
        }
    }
    return state ;
}
export default changeTheme;