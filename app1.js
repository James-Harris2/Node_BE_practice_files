// BackEnd Node Practice \\
const myFun4 = function(a,b,c){
    const val1 = a * b -c;
    return val1;
}
const a4 = myFun3(4,6,2);
const a5 = myFun3(24,33,4);
const a6 = myFun3(72,25,6);
console.log(a4, a5, a6);


function myFun1() {
    console.log('hello')
    console.log('world')
}

function myFun2(message,name,val) {
    console.log('1.', message,name,val)
    const val1 = name + ' ' + message; 
    console.log('2.', val1)
    return val1
}
// Invoke || call the function
myFun1()
myFun2('hello','James',2000)
myFun2('Hello', 'funk_Nose', 90)


const val1 = myFun2('Welcome','James',8000);
console.log(val1)

function myFun3(a,b,c) {
    const val1 = a * b / c;
    console.log('==== '+val1);
    return val1;
}

const a1 = myFun3(4,6,2);
const a2 = myFun3(24,33,4);
const a3 = myFun3(72,25,6);
console.log(a1, a2, a3);