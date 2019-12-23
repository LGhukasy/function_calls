// let a = 15;
// function f1() {
//     console.log(a)
// };
// f1();



// let a = 15;
// function f1() {
//     let a = 10;
//     console.log(a)
// };
// f1();



// let a = 15;
// function f1() {
//     let a = 10;
//     console.log(a);
//     f2();
// };
// function f2() {
//     console.log(a)
// };
// f1();



// let a = 15;
// function f1() {
//     function f2() {
//         console.log(a)
//     };
//     let a = 10;
//     console.log(a);
//     f2();
// };
// function f2() {
//     console.log(a)
// };
// f1();



// let a = 15;
// function f1() {
//     function f2(a) {
//         console.log(a)
//     };
//     let a = 10;
//     console.log(a);
//     f2();
// };
// function f2() {
//     console.log(a)
// };
// f1();



// let a = 15;
// function f1() {
//     function f2(a) {
//         console.log(a)
//     };
//     let a = 10;
//     console.log(a);
//     f2(a);
// };
// function f2() {
//     console.log(a)
// };
// f1();



// let a = 15;
// function f1() {
//     let a = 10;
//     console.log(a);
//     f2(5);
// };
// function f2() {
//     console.log(a)
// };
// f1();



// let a = 15;
// function f1() {
//     let a = 10;
//     console.log(a);
//     f2();
// };
// function f2() {
//     console.log(a);
//     f3()
// };
// function f3() {
//     console.log(a);
// };
// f1();



// let a = 15;
// function f1() {
//     function f3() {
//         console.log(a);
//     };
//     let a = 10;
//     console.log(a);
//     f2();
// };
// function f2() {
//     console.log(a);
//     f3()
// };

// f1();



// let a = 15;
// function f1() {
//     function f3(a) {
//         console.log(a);
//     };
//     let a = 10;
//     console.log(a);
//     f2();
//     f3();
// };
// function f2() {
//     console.log(a);
//     f3()
// };
// function f3() {
//     console.log(a);
// };

// f1();



// let a = 15;
// function f1() {
//     console.log(a)
//     f3();
// };
// function f3() {
//     console.log(a)
//     f1();
// };

// f1();



// let a = 15;
// function f1() {
//     console.log(a)
//     f3();
// };
// function f2() {
//     console.log("Hello");
//     f1()
// }
// function f3() {
//     console.log(a)
//     f2();
// };

// f1();



// let a = 15;
// function f1(a) {
//     console.log(a);
//     f3()
// };
// function f2() {
//     var a;
//     console.log(a);
//     f4()
// }
// function f3() {
//     let a;
//     console.log(a)
//     f2()
// };
// function f4() {
//     console.log(a)
// };

// f1();



// function f(a) {
//     let a;
// };
// f()



// function f1(cb) {
//     cb()
// };
// f1(function f2() {
//     console.log("Hello")
// })



// function f1(cb) {
//     cb()
// };
// function f2(){
//     console.log("Hello")
// }
// f1(f2)



// function f1(cb,cb1) {
//     cb(cb1)
// };
// function f2(cb){
//     console.log("Hello");
//     cb()
// };
// function f3(){
//     console.log("Hello1")
// };
// f1(f2,f3);


// let a = 15;
// function f1(cb,cb1) {
//     console.log(a);
//     cb(cb1)
// };
// function f2(cb){
//     let a = 10;
//     console.log(a);
//     cb()
// };
// function f3(){
//     console.log(a)
// };
// f1(f2,f3);



// let a = 15;
// function f1(cb, cb1) {
//     console.log(a);
//     cb(cb1)
// };
// function f2(cb) {
//     let a = 10;
//     console.log(a);
//     cb()
// };
// function f3(a) {
//     console.log(a)
// };
// f1(f2, f3);