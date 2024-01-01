// array of values

const ary = ['apple','banana','mango']


for(let i=0;i<ary.length;i++){
    // console.log(ary[i]);
}

for(let fruit of ary){
    // console.log(fruit);
}

const aryobj = [{fruit:'apple'},{fruit:'banana'},{fruit:'mango'}]
for(let i =0;i<aryobj.length;i++){
    // console.log(aryobj[i].fruit);
}

for (let fruitobj of aryobj){
    // console.log(fruitobj.fruit);
}


const obj1 = {fruit1:'apple',fruit2:'banana',fruit3:'mango'}

for(const key in obj1){
    // console.log(obj1[key])
}

Object.entries(obj1).forEach(([key,value])=>{
    // console.log(value);
})


Object.keys(obj1).forEach(key=>{
    // console.log(obj1[key]);
})




