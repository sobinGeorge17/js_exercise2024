const data = [
     {"firstname":" Ann", "lastname":" Wilson ", "phone": "29378245", 
    "zip": "2 0 00 1 ", "age": 160, "id": " 12345 "},
    {"firstname":"Chris ", "lastname":"Morgan", "phone": "729378245",
     "zip": " 65 00 1", "age": 70, "id": " 123453543636 "},
     {"firstname":" Andrew ", "lastname":" Storm", "phone": "543729378245",
      "zip": " 7001 4", "age": 32, "id": "5 648"}

]


for(let i=0; i<data.length;i++){
    const biodata = data[i]
    for(let key in biodata){
       if(typeof biodata[key] === 'string'){
        biodata[key] = biodata[key].trim().split(' ').join('')
       }
    }
  
    const fname = biodata.firstname
    const lname = biodata.lastname
    const fullName = fname.concat(' ',lname)
    console.log(`Name :${fullName}`);
    const phoneNum = biodata.phone.slice(0,10).padStart(10,'0')
    console.log(`phone :${phoneNum}`);
    if(biodata.age>0 && biodata.age<150){
        console.log('Age : ' +'NA');
    }else{
        console.log('Age : ' +'nil');
    }
    console.log(`zip : ${biodata.zip}`);
    const hashNum = biodata.id % 1000
    const maskNum = biodata.id.replace(hashNum,'###')
    console.log(`id :${maskNum}`);

 
}




