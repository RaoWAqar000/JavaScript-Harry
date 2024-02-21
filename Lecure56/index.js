console.log("hello world")

let age = 45;

if(age>18){
    console.log("you can drive");
}
else{
    console.log("you cannot drive");

}

let a = 7;
let b = 4;

let c = a>b ?(a-b) : (a+b);
/* Translates to:
if(a>b){
    let c = a-b;
    console.log(a-b);
}
else{
    let c = a+b;

    console.log(a+b);
}
*/
console.log(c);