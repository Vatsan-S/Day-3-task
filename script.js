
//! Task 1 - Comparing JSON

let obj1 = {name:"Person 1", age:5};
let obj2 = {age:5, name:"Person 1"};
var a =_.isEqual(obj1, obj2);
console.log(a);

//! Task 2 - Display all country flags.

var flagsRequest = new XMLHttpRequest();
flagsRequest.open("get", "https://restcountries.com/v3.1/all", true);
flagsRequest.send();
flagsRequest.onload = function(){
    var responseData = flagsRequest.response;
    var ParsedData = JSON.parse(responseData);
    for(var i =0;i<ParsedData.length;i++){
        console.log(ParsedData[i].flags.png);
    }
    for(var j =0;j<ParsedData.length;j++){
        console.log("Country Name: " + ParsedData[j].name.common + " ,Region: " + ParsedData[j].region + " ,Sub region: " + ParsedData[j].subregion + " ,and population of " + ParsedData[j].population + " people" );
    }
    
}