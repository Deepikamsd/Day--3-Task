/*Task 1
 How to compare two JSON have the same properties without order?

a. let obj1 = { name: "Person 1", age:5 };

b. let obj2 = { age:5, name: "Person 1" };*/

let obj1 = { name: "Person 1", age: 5 };
let obj2 = { age: 5, name: "Person 1" };
let str1 = JSON.stringify(obj1, Object.keys(obj1).sort());
let str2 = JSON.stringify(obj2, Object.keys(obj2).sort());
if (str1 === str2) {
    console.log("The objects are equal.");
} else {
    console.log("The objects are not equal.");
}



/*Task 2
Use the rest countries' API URL -> https://restcountries.com/v3.1/all and display all the
country flags in the console.*/


var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all","True");
request.send();
request.onload=function(){
    var data=request.response;
    var result=JSON.parse(data);
    for(var i=0;i<result.length;i++){
        console.log(result[i].flags.png)
    }

}


/*Task 3
Use the same rest countries and print all countries names, regions, sub-region and populations*/

var request1 = new XMLHttpRequest();
request1.open("GET","https://restcountries.com/v3.1/all","True");
request1.send();
request1.onload=function() {
    var data1=request1.response;
    var result1=JSON.parse(data1);
    for(var i=0;i<result1.length;i++){
        console.log("CountryName:"+" "+result1[i].name.common,"Region:"+" "+result1[i].region,"subregion:"+" "+result1[i].subregion,"population:"+" "+result1[i].population)
    }

}

