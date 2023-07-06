function capitalize(str){
    str.split('').map(word=>word.charAt(0).toUpperCase()+word.slice(1)).join('');
}

var str=prompt("enter the string")
var word=capitalize(str);
alert(word);