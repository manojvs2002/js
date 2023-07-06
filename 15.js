var flag=0;
const bookflight=(flag)=>{
    return new Promise((resolve,reject)=>
    {
        if(Number(flag)){
            resolve("flight booked");
        }
        else{
            reject("flight not booked");
        }
    })
}

const bookhotel=(flag)=>{
    let res=bookflight(flag);

    res.then((booked)=>
    {
        console.log(booked);
        console.log("hotel booked successfully")
    }).catch((error)=>{
        console.log(error);
        console.log("hotel not bookes successfully")
    });
}

bookhotel(flag);