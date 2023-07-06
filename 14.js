function trip(location){
    return new Promise((resolve,reject)=>{
        if(location==='paris'){
            resolve('sucess')

        }
        else{
            reject('unsucess')
        }
    })
}

var loc=prompt("enter the location")

trip(loc).then((message)=>{alert("message");}).catch((error)=>{alert("error")});