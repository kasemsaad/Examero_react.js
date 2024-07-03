import { counter } from "@fortawesome/fontawesome-svg-core";
import { CHANGE_THEME, COUNTER } from "../Types/types";

const changeTheme = (state={color:"#090631",lay:"#0E0A43",counter:0},action)=>{

    if(action.type == CHANGE_THEME){

        const color = "black"
       const  toggled =""
        return {
            ...state,
            color:state.color === "white" ? "#090631" : "white",
            lay:state.lay === '#0E0A43' ? "#ECECEC" : "#0E0A43"

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