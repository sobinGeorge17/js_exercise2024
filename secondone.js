


// function greets(fname,lname){
//     const fullname = fname +  lname
//     function msg(){
//         let msg = 'greetings'
//         console.log(msg + fullname);

//     }msg()
// }


(function (){
    console.log('loading user details')
    const greet =(firstname,lastname)=>{
        const fullname = firstname + lastname
        const msg =()=>{
            const message = 'greetings '
            console.log(message + fullname);
        }
        msg()
        
    }
    greet('navin','kp')
    
})()