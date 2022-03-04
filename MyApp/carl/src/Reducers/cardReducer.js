const initialData={
    cardData:[
        {
            name:"Maaz",
            image:"https://www.wallpapertip.com/wmimgs/152-1523914_full-screen-ultra-hd-wallpaper-hd.jpg",
            city:"Nanded",
        },
        {
            name:"Azhar",
            image:"https://funkylife.in/wp-content/uploads/2021/06/whatsapp-dp-15.jpg",
            city:"Nanded",
        },
        {
            name:"Mushu",
            image:"https://static.statusqueen.com/mobilewallpaper/thumbnail/mobile_wallpaper_21-492.jpg",
            city:"Nanded",
        }
    ]
}
export const cardReducer=(state=initialData,action)=>{
   if (action.type==="ADD"){
       return{
           ...state,
           cardData:[...state.cardData,action.data]
       }}
       else{
           return state;
       }
   
}