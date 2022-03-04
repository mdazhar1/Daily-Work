export const sampleReducer=(state={list:[]},action)=>{
    if(action.type==="Add-List"){
        return {...state,list:[...state.list,...action.data]};
    }else{
   return state;
    }
};