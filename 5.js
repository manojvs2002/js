function encrypt(msg,key){
    var encry="";
        for(var i=0;i<msg.length;i++){
        var code=msg.charCodeAt(i);
        if(code>=97 && code<=97-25){
            code-=97;
            code=(code+key)%26;
            code+=97;
        }
            encry+=String.fromCharCode(code);
        }
        return encry;
    }
    var msg=prompt("enter the string");
    var shift=parseInt(prompt("enetr the key"));
    console.log(encrypt(msg,shift));