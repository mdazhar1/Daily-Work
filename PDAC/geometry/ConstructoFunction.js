// Constructor Function?

// it is desigend to construct new objects.
// in constructor function THIS keyword refers to a newly created object which values can be assigned to .
// constructor function "return" this new object automatically.

// We can say that a constructor function is a regular function with the following convention:

// the name of constructor functions name always start from capital letter like Person, Details, etc.


//Examples:


// function Person(firstname,lastname,age,Phone,add){
//     this.firstname=firstname;
//     this.lastname=lastname;
//     this.age=age;
//     this.phNo=Phone;
//     this.add=add;
// }
// const Person1= new Person("Maaz","Quadri",24)
// console.log(Person1)

// const Person2= new Person("Mujtaba","Quadri")
// console.log(Person2)

// const Person3= new Person("mujtaba","quadri",17,95426325,"Gadi Pura Nanded")
// console.log(Person3)



// function Details(firstname,lastname,age,color){
//         this.firstname=firstname;
//         this.lastname=lastname;
//         this.age=age;
//         this.color=color;
//         this.changeAge=function(num){
//             this.age=num;
//         }
// }
// const Person= new Details("Maaz","Quadri",24,"Black")
// Person.changeAge(30);
// console.log(Person)







// function GetFullName(fname,lname){
//     this.firstName=fname;
//     this.lastName=lname;
//     this.getName=function(){
//         return `First Name:${this.firstName} Last Name:${this.lastName}`;
//     };
//     return this;
// }
// const output= new GetFullName("Maaz","Quadri");
// console.log(output.getName());





// function GetFullName(fname,lname){
// this.FirstName=fname;
// this.LastName=lname;
// this.getName=function(){
//     return `First Name:${this.FirstName} Last Name: ${this.LastName}`;
// };
// return this;
// }
// const result= new GetFullName("Maaz", "Quadri")
// console.log(result.getName())


function maaz(a,b){
    this.a=a;
    this.b=b;
    this.baigan=()=>{
        return a*b
    }
}
const sum = new maaz(4,7)
console.log(sum.baigan())



function Details(fname,lname,age,pin){
    this.FullName=fname;
    this.LastName=lname;
    this.Age=age;
    this.Pin=pin;

}
const Person= new Details("MAAZ", "QUADRI",24,431604)
console.log(Person)




