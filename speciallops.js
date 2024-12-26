//loops on arrays
//for of loop: array specific loop

const arr = [1, 2, 3, 4, 5]

for (const val of arr) {
    // console.log(val);

}

//map
//obect hloding keypairs
//unique values noi dupco

const map = new Map();

map.set('PK', 'Pakistan');
map.set('FR', 'France');
map.set('IT', 'Italy');

//console.log(map);

for (const [key,value]of map){
   // console.log(key,value);
    

}



///onjextss

const myobject = {
    name:"ahsan",
    age: 22,
    email: "ashaniooi@gmail.com",
    phone: "0322308262",
}
for (const key in myobject) {
   //console.log(key,myobject[key]);
   
}



//foreachloop 



const coding = ["python","js","ruuby","cpp","php"]

coding.forEach(function (item){
   // console.log(item);
    
})

//arrow finvtion 

coding.forEach((val)=>{
   // console.log(val);
    
})



const mylang = [
    {
        languge:"pyhton",
        author:"jimmy",
        date:"2-2-2209"
    },
    {
        languge:"java",
        author:"mike",
        date:"1-32-2409"
    },
    {
        languge:"php",
        author:"andrew",
        date:"7-4-22343"

    }
]
mylang.forEach((item)=>{
   // console.log(item.author);
    
})




let test=[
    {name:'naveed',class:"BCS8A",phoneNum:'0313222912',age:26,country:"pak"},
    {name:'naveed',class:"BCS8A",phoneNum:'0313222912',age:26,country:"aus"},
    {name:'naveed',class:"BCS22",phoneNum:'0313222912',age:26,country:"aus"},
    {name:'naveed',class:"BCS8A",phoneNum:'0313222912',age:26,country:"ind"},
    {name:'naveed',class:"BCS8A",phoneNum:'0313222912',age:26,country:"pak"},
    {name:'naveed',class:"BCS8A",phoneNum:'0313222912',age:26,country:"pak"},
    {name:'ahsan',class:"BCS8A",phoneNum:'0313222912',age:26,country:"pak"},
    {name:'naveed',class:"BCS8A",phoneNum:'0313222912',age:26,country:"pak"},
    {name:'naveed',class:"BCS8A",phoneNum:'0313222912',age:26,country:"pak"},
    {name:'naveed',class:"BCS8A",phoneNum:'0313222912',age:26,country:"pak"},
    {name:'naveed',class:"BCS8A",phoneNum:'0313222912',age:26,country:"pak"},
    {name:'naveed',class:"BCS8A",phoneNum:'0313222912',age:26,country:"pak"},
    {name:'naveed',class:"BCS8A",phoneNum:'0313222912',age:26,country:"pak"},
    {name:'naveed',class:"BCS8A",phoneNum:'0313222912',age:26,country:"pak"},
    {name:'naveed',class:"BCS8A",phoneNum:'0313222912',age:26,country:"pak"},
    {name:'naveed',class:"BCS8A",phoneNum:'0313222912',age:26,country:"pak"},
    {name:'naveed',class:"BCS8A",phoneNum:'0313222912',age:26,country:"pak"},
    {name:'naveed',class:"BCS8A",phoneNum:'0313222912',age:26,country:"pak"},
    {name:'naveed',class:"BCS8A",phoneNum:'0313222912',age:26,country:"pak"},
    {name:'naveed',class:"BCS8A",phoneNum:'0313222912',age:20,country:"pak"},
    {name:'naveed',class:"BCS8A",phoneNum:'0313222912',age:26,country:"pak"},]

let result = test.filter((ts)=> ts.country === "pak" && ts.name ==="ahsan")
console.log(result);

