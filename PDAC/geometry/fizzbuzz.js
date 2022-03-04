// for(let i=1; i<=100; i++){
//     if(i%15===0) console.log("FizzBuzz")
//     else if (i%3===0) console.log("Fizz");
//     else if(i%5===0) console.log("Buzz")
//         else console.log(i);
//     }

// Number is completly divided by 3 ==> FIZZ  eg.3
// Number is completly divided by 5 ==> BIZZ   eg.5
// Number is completly divided by 3 & 5 ==> FIZZBIZZ  eg.15
// else if number can't complete divided by 3 or 5 id called number.



// let str="";
// for(let i=1; i<=100; i++){
//     if(i%15===0) str=str+"FizzBuzz";
//     else if (i%3===0) str=str+"Fizz";
//     else if(i%5===0) str=str+"Buzz"
//         else str=str+ " " +i;
//     }
//     console.log(str);


    let M="";
    for(let i=1; i<=100; i++){
        if (i%15 === 0) M= M + "FizzBuzz";
        else if (i % 3 === 0) M = M + "Fizz";
        else if (i % 5 === 0) M = M + "Buzz";
        else M = M + " " + i
    }
    console.log(M);



