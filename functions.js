// functions Defination 
function sayhello(){
    console.log("Hello ");
    console.log("Hello ");
    console.log("Hello ");
    console.log("Hello ");
    
}

// console.log(sayhello());
sayhello()

//parameters 
function add(num1,num2){
    console.log(num1+num2)
}
//arguments 
add(23,7)

//2nd method bu return 

function sub (num1,num2){
   // let result = num1-num2
    //return result
    return num1-num2
}
const result =sub(20,10)
console.log(result);

function adduser(username){
    if(username === undefined){
    console.log("enter the user name");
    }
    return `${username}, just logien in`
}
console.log(adduser("ashan"));




//rest oprator ...
//passing multiple values in a funvtions 

function addthree(...num1){
return num1
}
console.log(addthree(2,3,4,5));


//obects ina functions 

const client ={
    cname: "ashan",
    price: 456
}

function obj(anyobj){
    console.log(`the user name is ${anyobj.cname} and the price is ${anyobj.price}`);
    
}
 obj(client)


 ///Arrow functons 
//this keyword 
//this keyword tell current context
//refer current context 

let suser ={
    sname:"ashan",
    price:"999",
    welcome: function mesg(){
        console.log(`${this.sname}, welcone to this site`);
    }
}
suser.welcome()

//arrow function
//remmove function lewword and replace it with pranthiises()
//impicty return 

let addtwo = (num1,num2) => (num1 + num2)

console.log(addtwo(3,5));


((names) =>{
    console.log(`my nsame iis  ${names}`);
    
})("ahsan")