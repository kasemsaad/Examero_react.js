export const addToFavorites=(payload)=>{
    return{
        type:"ADD",
    payload,
    
    }
}
export const removeFromFavorites = (payload) => ({
    type: "REMOVE",
    payload
});
