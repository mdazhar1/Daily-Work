//const {First}= require("react-bootstrap/esm/pageitem")

// const Person={fname:"Maaz", lname:"Quadri", age:24}
// function getname(city,phone,add){
//     return `First Name: ${this.fname} Last Name: ${this.lname} Age: ${this.age} City: ${city} number: ${phone} Address : ${add}`;
// }
// // console.log(getname.bind(Person)("Nanded"))
// console.log(getname.call(Person,"Nanded",8806299311,"Gadi pura, Nanded"))


const Details={fname: "Maaz", lname: "Quadri", age: 24}
function getDetails(add,pin){
    return `First Name: ${this.fname} Last Name: ${this.lname} age:${this.age} Address: ${add} PinCode:${pin}`
}
// console.log(getDetails.bind(Details)("Gadi pura, Nanded",431604))
console.log(getDetails.call(Details,"Gadi pura, Nanded",431604))










