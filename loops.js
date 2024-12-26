//for loop 
//basics
for (let i = 0; i <= 10; i++) {
    const element = i;
    if (i == 5){
        console.log("mid is here");
    }
    console.log(element);
}


//array 
let myarray= ["ahsan","ali","ahmed","khan"]
for (let index = 0; index < myarray.length; index++) {
    const element = myarray[index];
    console.log(element);
    
}

//keywords
//break and continue 

for (let index = 0; index <=20; index++) {
    if (index == 5) {
        console.log("5 is detectes" );
        break
        
        
    }
    const element = (index);
    console.log(element);
    
    
}

//while loop
console.log("while loop");

let x = 0
while (x <=10) {
console.log(x);
x = x+4
    
}

//do while loop 

let y =1
do {
    console.log(`hey ther ${y}`);
    y++
    
} while (y <= 5);