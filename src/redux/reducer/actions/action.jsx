// import Api_Dashboard from "../../dashboard/interceptor/interceptorDashboard";
// import { ROLE } from "../Types/types";

import Api_Dashboard from "../../../dashboard/interceptor/interceptorDashboard";
import { ROLE } from "../../Types/types";

export const fetchRoleAndImage = () => async (dispatch) => {
    await Api_Dashboard.get('/refresh').then((response)=>{
        console.log(response);
        let x =  response.data.User.role_name
        dispatch({
                    type: ROLE,
                    payload: {
                         role:x, 
                        // image:  response.data.User.media.name
                    }
                });

    }).catch((err)=>{
        console.log(err);
    })
};
