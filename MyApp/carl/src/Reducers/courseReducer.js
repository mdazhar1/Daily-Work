const initialState={
    courses:[
        {Name:"HTML",
        image:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png",
        description:"Hyper Text Markup Language"},
        {Name:"CSS",
        image:"https://w7.pngwing.com/pngs/804/171/png-transparent-web-development-cascading-style-sheets-css3-html-world-wide-web-blue-angle-web-design-thumbnail.png",
        description:"Cascading Style Sheet"},
        {Name:"JAVASCRIPT",
        image:"https://static.javatpoint.com/images/javascript/javascript_logo.png",
        description:"JavaScript"},
        {Name:"REACT",
        image:"https://spng.pngfind.com/pngs/s/430-4309307_react-js-transparent-logo-hd-png-download.png",
        description:"React"},
    ]
}
export const courseReducer=(state=initialState,action)=>{
    return state;
}