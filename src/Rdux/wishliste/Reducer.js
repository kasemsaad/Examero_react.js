const INITIlA_VALUE={
    fav:[],
    
}
 function addToWishList(state=INITIlA_VALUE,action){

    switch(action.type){
        case "ADD":
        return{
            ...state,
        fav:[...state.fav,action.payload],
        
        };
        case "REMOVE":
        return{ 
            ...state,
            fav: state.fav.filter(itemId => itemId !== action.payload) 

            }            
        
        default:
        return state;

    }
        
          

};
export default addToWishList;