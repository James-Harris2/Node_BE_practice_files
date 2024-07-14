// BackEnd Node Practice 

function myFun1() {
    console.log('hello')
    console.log('world')
}

function myFun2(message,name,val) {
    console.log(message,name,val)
    const val1 = name + ' ' + message; 
    console.log(val1)
}
// Invoke || call the function
myFun1()
myFun2('hello','James',2000)
myFun2('Hello', 'funk_Nose', 90)
