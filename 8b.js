var input=prompt("enter the text")
var inputmatch=input.match( /^1[a-zA-Z]{2}\d{2}[a-zA-Z]{2}\d{3}$/);
alert(inputmatch?"input matches":"not matches the ibput");