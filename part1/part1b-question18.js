function printNums() {
    console.log(1);
    setTimeout(function() {console.log(2); }, 1000);
    setTimeout(function() {console.log(3); }, 0);
    console.log(4);
}

printNums();

// var d = new Date();
// var time = d.toLocaleTimeString();

// function timer() {
//     var hour = d.getHours();
//     var min = d.getMinutes();
//     var sec = d.getSeconds();
// }

// console.log(timer());
// console.log(hour + ":" + min + ":" + sec);



// function modifyArray(array, callback) {
//     const newArr = [];
//     for (let i = 0; i < array.length; i++) {
//         newArr.push(callback(array[i]));
//     }
//     return newArr;
// }

// function doSomething(num) {
//     return num * 2;
// }

// console.log(modifyArray([1, 2, 3], doSomething));
