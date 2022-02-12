// const arr1 = [1,2,3];
// const arr2 = [4,5,6];

// const arr3 = arr1.concat(arr2);    
// console.log(arr3)

// ye 2 array ko ek jagah merge krne k liye use hota hai== ya phir hme 2 array ko 1 jaga krna ho to hum new array le kar concat method use krte hai
 



// const arr1=["a","b","c","d"]
// const arr2=["e","f","g","h"]
// const arr3= arr1.concat(arr2)
// console.log(arr3)



// const newArry=[1,2,3,4,5,6];
// const popped = newArry. pop();

// console.log(newArry);
// console.log(popped);

// pop method===> ye method use krne par ye array ke last element ko nikal deta hai ,
// if we use pop method it will kick the last element of array







// const newArry=[1,2,3,4,5,6,7];
// const pushed=newArry.push(10);
// console.log(pushed);
// console.log(newArry);


// push method array ki last value ko bahar nikalne ke liye use hota hai



// const newArry=[1,2,3,4,5,6,7];
// const shifted=newArry.shift();
// console.log(newArry);

// shift method use krne pr wo array ki 1st  value ko bahar nikale ga 



// const newArry=[1,2,3,4,5,6,7];
// const unshifted=newArry.unshift(50)
// console.log(newArry);

// unshift method use krne par hum jo value dege wo use start me add kr dega 



// const newArry=[1,2,3,4,5,6,7];
// const reversed=newArry.reverse();
// console.log(reversed);

// revers method value ko reverse krne ke liye use hota hai 



// const newArry=[1,2,3,4,5,6,7];
// const result=newArry.forEach((Maaz)=> console.log (Maaz*5));

// foreach method Array ke har element k sath action krta hai 
// is method ka use kr k hum array k sath kuch bhi kr skte hai 
// or foreach me callback function ke bad console.log likhna zarori hai nahi to ye undefined bataye ga 



// const newArry=[1,2,3,4,5,6,7];
// const result=newArry.filter((maaz)=> maaz%2 !==1)
// .map((maaz)=> maaz*10)
// .reduce((acc,curr)=>acc+curr);
// console.log(result);



// const alpha=["a","b","c","d","e","f","g","h","i"];
// const result= alpha.slice(1,5);
// console.log(result);
// console.log(alpha);

// slice method== agar hme array me ki koi bhi value lena hai ya phir beech ki value lena hai to hum slice method ka use krte hai.. index value k hisab se leta ye






// const alpha=["a","b","c","d","e","f","g","h","i"];
// const result=alpha.splice(3,0, "Abc", "xyz");
// console.log(alpha);

// agar hme array ki value k beech me kuch add karna ho to hum Splice use krte hai
// jaha bhi add karna ho kr skte but hme waha ki index value deni hogi ye index value k upar work krta hai 





// const arr=[2,3,4,1,5,6,7,8]
// const result= arr.every((Maaz)=> Maaz>7)
// console.log(result);

// every method true of false check karne k liye use hota hai 
// or ye har ek k value me condition ko check krta hai agar ek bhi condition wrong hui to ye false de dega
// iska input true of false me aata hai 




// const arr=[2,3,4,1,5,6,7,8]
// const result= arr.some((item)=> item>5)
// console.log(result);

// some method bhi true of false check krne ke liye hota hai/
// iska input boolean value me aata hai
// ye har ek value me condition check krega or agar 1 bhi condition sahi hui to ye true de dega



// const arr=[2,3,4,1,5,6,7,8]
// const result= arr.includes(9);
// console.log(result);


// includes method ==> ye check krega ke hmne jo inclueds me value di hai wo array me hai ya nahi
//  agar rahi to true dega or nahi rahi to false dega.



// const arr=[2,3,4,1,5,6,7,8]
// const result=arr.find((item)=> item>7)
// console.log(result);

// find method ==> agar hme array k ander kuch find krna hai to hum find method ka use kr skte 




// const arr=[2,3,4,1,5,6,7,8]
// const result=arr.indexOf(7);
// console.log(result);

// Agar hme index value maloom karna ho to hum indexof use kr skte 



// const arr=[2,3,4,1,5,6,7,8]
// const result=arr.findIndex((item)=> item===8);
// console.log(result);



// const arr=['M','A','A','Z']
// const result=arr.join('#')
// console.log(result);

// const arr=new Array(8);
// console.log(arr.fill(10,3, 5));

// const arr=[1,2,3]
// arr2=[...arr, 4,5,6]

// console.log(arr2)

// let num1=(123)
// function maaz(num1){
//     console.log(num1.reverse)
// }












