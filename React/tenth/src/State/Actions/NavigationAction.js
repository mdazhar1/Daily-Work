export const NavigationAction = (name, link, target) => {
    return{
        type: "ADD-NAV-LINK",
        navData: {name, link, target},
    }
}
// export const NavigationAction = (name, link, target) => {
//     return{
//         type: "DELETE",
//         navData: {name, link, target},
//     }
// }
// export const EditNavigationAction = (name, link, target) => {
//     return{
//         type: "DELETE",
//         navData: {name, link, target},
//     }
// }


