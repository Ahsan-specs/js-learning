//ARRAYS//
// collection of multilpe itnems in single variable 
//storing differnt types of data in one varibale 
//js array are resizable ,

const array = [1,2,3,4,5]
console.log(array[1]);


let name =["ahsan","ahmed","ali"]
console.log(name[0]);


///arrays methods 


//push method:sily add the values 

const num =[1,2,3,4,5]
console.log(num);
num.push(6,"ashan",78);
console.log(num);

//pop method 
//just remove last value of array 

let remar =[0,1,3,4,5,6,8]
remar.pop()
console.log(remar);


//shift and unshift :add and reove the values in first index 

//Array Queastion method 
//include

let ah =[ "ashan","ahmed","ali"]
console.log(ah.includes("ali"));


//slice and splice 
//slice:return section of arrays 
//splice remove the range number 

let myarr = [0,1,2,3,4,5,6,7,8]
console.log("a",myarr);
let nr = myarr.slice(1,5)
console.log(nr);

let spl = myarr.splice(2,7)
console.log(myarr);

//concat array 
//combine two array and retuen neww array 
let names = ["ahsan","ali","khan"]
let rn = [23,45,67]
let combine = names.concat(rn)
console.log(combine);

//spread metho d
console.log(...names,...rn);

//cobert into arrya
let mr = ["ahsan"]
console.log (Array.from(mr));
