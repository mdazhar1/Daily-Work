//Factory Function?
// It is a function that create a new objects.

// why we use factory fucntion?
//
//if we have a complex logic, and we have to create multiple objects than we can write the logic once in a function and use that function as a factory to create our objects.


//Examples:

// function Person(name,age,num){
//     return{
//         name: name,
//         age: age,
//         num: num,
//        fullDetails(){
//             console.log("My self",name,"My age is",age,"My Number is",num)
//         }
//     }
// }
// let result=Person("Maaz Quadri",24,143)
// console.log(result.fullDetails())


// let result=Person("Mujju",18,25846254)
// console.log(result.fullDetails())







// function GetCircleArea(radius){
//     return{
//     radius,
//     pi : 3.14,
//     draw(){
//         return this.pi*radius*radius
//     }
//     }
// }
// // let result= GetCircleArea(10);
// // console.log(result.draw())


// let result = GetCircleArea(20)
// console.log(result.draw())




// function Calculate(acc,curr){
//     return{
//         acc,
//         curr,
//         sum(){
//             return acc+curr
//         }
//     }
// }
// let result=Calculate("Maaz", "Quadri")
// console.log(result.sum())






// function GetFullDetails(name,age,add,pin,phone,email){
//     return{
//         name,
//         age,
//         add,
//         pin,
//         phone,
//         email,
        
//     }
// }
// let result=GetFullDetails("Maaz Quadri",24,"Gadi pura Nanded",431604,8806299311,"stenomaazquadri2014@gmail.com")
// console.log(result)



// function GetFullDetails(name,age,add,pin=431604){
//     return{
//         name,
//         age,
//         add,
//         pin,
//     }
// }
// // let result=GetFullDetails("Maaz Quadri",24,"Gadi pura Nanded")
// // console.log(result)

// // let result2=GetFullDetails("Mujju",18,"Nanded")
// // console.log(result2)

// let result3=GetFullDetails("Eman Ali",19,"Pakistan")
// console.log(result3)







function Person(name,age,num){
    return{
        name: name,
        age: age,
        num: num,
       fullDetails(){
            console.log("My self",name,"My age is",age,"My Number is",num)
        }
    }
}
let result=Person()
console.log(result)



// let result=Person("Mujju",18,25846254)
// console.log(result.fullDetails())















