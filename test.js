console.log("hello world");
console.log("test")
console.log("test") 



var length = 16;
var lastName = "Johnson";
var x ={firstName : "John", lastName : "Doe"};

var x = 16 + "Volvo";
console.log(x);

var y = "16" + "Volvo";
console.log(y);

var z = 16 + "Volvo";
console.log(z);

var a = "Volvo"+16;
console.log(a);

var b = 16+4 +"Volvo";
console.log(b);




console.log(lastName);



function sum(p1, p2){
    return p1+p2;
};


function minus(p1, p2){
    return p1-p2;
};

function multiple(p1, p2){
    return p1*p2;
};

function divide(p1, p2){
    return p1/p2;
};


console.log(sum(1,2));
console.log(minus(1,2));
console.log(multiple(1,2));
console.log(divide(1,2));



var car = {
    name: "Fiat",
    model: "500",
    weight: "850kg",
    color: "white"

}

console.log(car);


var car1 = "Saab";
var car2 = "Volvo";
var car3 = "BMV";
var cars = ["Saab","Volvo", "BMV"];
var car = [car1,car2, car3];




console.log(cars);
console.log(car[0]);
var text ="";
for(var i = 0; i<car.length;i++){
    console.log(car[i]);
}