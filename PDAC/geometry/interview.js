// const str= "maharashtra"
// split = str.split(" "),
//     obj = {};
// it is use for count words value
// for (let i = 0; i < split.length; i++) {
//   if (obj[split[i]] === undefined) {
//     obj[split[i]] = 1;
//   } else {
//     obj[split[i]]++;
//   }
// }

// console.log(obj)


// const str= "maharashtra";
// const arr1=str.split("");
// const obj={};
// arr1.forEach((elem)=>{
//     obj[elem]=obj[elem]?obj[elem]+1:1})
// console.log(obj);




// const str="My name is Maaz Quadri";
// obj={};
// str.split("").forEach(elem=>{
//     obj[elem]=obj[elem]?obj[elem]+1:1
// })
// console.log(obj);




const arr=[100, 90, 80, 70, 60,50, 40, 30, 20, 10]
const result=arr.sort((a,b)=> a>b? 1:-1)
// const result=arr.indexOf(50);
// const result=arr.findIndex((item)=> item===80);
console.log(result)

// const str="My name is Maaz Quadri";
// obj={};
// str.split("").forEach(elem=>{
//     obj[elem]=obj[elem]?obj[elem]+ 1:1
// })
// console.log(obj);


// const obj1={
//     fname: "Maaz",
// }
// const obj2={
//     lname: "Quadri"
// }
// // const newobj={...obj1,...obj2}
// // console.log(newobj)

// console.log(obj1.fname,obj2.lname)

// const str= "i am from Nanded";
// const result= str.split(" ").reverse().join(" ");
// console.log(result);


// const num=3
// if (num===3){
//     console.log (4)
// }else if (num===4){
//     console.log (3)
// }
// console.log(num);



// const input=(num)=>{
//     const a= 7-num;
//     return a;
// }
// console.log(input(3))
// console.log(input(4))


// const fibo=(n)=>{
//     const fibarray=[0,1];
//     for(var i=2; i<n; i++){
//     fibarray.push(fibarray[i-2]+ fibarray[i-1])
//     }
//     return fibarray;
// }

// console.log(fibo(10));