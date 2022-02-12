class Person {
    constructor(fname,lname){
        this.firstName= fname;
        this.lastName=lname;
    }
    getFullName(){
        return `First Name: ${this.firstName} Last Name: ${this.lastName}`;
    }
}

// const firstOutput = new Person ("Maaz", "Quadri");
// console.log(firstOutput.getFullName());

class Address extends Person {
    
    constructor(fname,lname,city, country){
        super(fname,lname);
        this.city=city;
        this.country=country;
    }
    getAddress(){
        return `City: ${this.city} Address: ${this.country}`;
    }
}

// const secondOutput = new Address("Maaz", "Quadri","Gadipura", "India" );
// console.log(secondOutput);

class FullDetails extends Address{
    constructor(fname,lname,city,country,phone){
        super(fname,lname,city, country)
    this.phone=phone;
}
getPhone(){
    return `phone: ${this.phone}`;
}
}
const thirdOutput= new FullDetails("Maaz", "Quadri","Gadipura", "India",8806299311)
console.log(f)
console.log(thirdOutput)