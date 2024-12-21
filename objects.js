//object singlton 
//obcet through constratctor  "objrct.create"

//object by litrells :

const user ={
    name: "ahsan",
    age: 23,
    emial:"ahsan@gmail.com",
    isLogin: false,
    lastLogin: ["mon","tue","wed","thur","fri"]
}
console.log(user.name);
console.log(user);

//oject.freeze(user)  to freez the object 

//functions in obects :

user.welcome = function(){
    console.log(`welcome ${this.name} to our site `);
    
}
console.log(user.welcome());
   


//object singlton 
const user2 = new Object()
user2.id =123,
user2.name = "shekhi"
console.log(user2);


const user3 = {}
user3.id =999,
user3.name ="sardra"
console.log(user3.id);

const user4 ={
emaial : "ahs@gmail.com",
fullname: {
    userfullname:{
        username: "ashan",
        lastname: "khan"
    }
}
}
console.log(user4.fullname.userfullname.lastname);

const combine = {...user2, ...user3, ...user4}
console.log(combine);

//accsesing keys and values 

const instauser = {
name:"ahsan",
age: 22,
email: "ashaniooi@gmail.com",
phone: "0322308262",
}
console.log(Object.keys(instauser));
console.log(Object.values(instauser));
console.log(Object.entries(instauser));


// destructuing ::

const course ={
    subject: "CS",
    price : "280pkr",
    teacher:"ahmed shah"
}

const {subject}= course
const {price: RS}= course

console.log(subject);
console.log(RS);
