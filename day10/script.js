switch("hi"){
    case "hello": 
        console.log("it is hello");
        break;
    case "hi": 
        console.log("it is hi");
        break;
    case "gm": 
        console.log("it is gm");
        break;
}


let color = "red";
switch(color){
    case "red":
        console.log("it is red color");
        break;
    case "pink":
        console.log("it is pink color");
        break;
    case "black":
        console.log("it is black color");
        break;
    default:
        console.log("enter valid color");
}


let num1 =10;
let num2 =20;
let operation ="+";
switch(operation)
{
    case "+":
        console.log(num1+num2);
        break;
    default: 
        console.log("enter valid operation");
}




// chking string is palidrome or not 
function palidrome(srt)
{
    let splistgin = structuredClone.split("").reverse().join("");
    if (str==splistgin){
        console.log("it is palidrome")
    }
}

 palidrome(nitin);
