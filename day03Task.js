//                          1.JSON iteration overall the for loops(for,for in,for of and for Each)

//Example of JSON formate ,where the keys are strings and the values can be strings, numbers, booleans, arrays, or other JSON objects.
let student={
    "name": "krishna moorthy",
    "age": 24,
    "address": {
        "street": "100 Main Street",
        "city": "Chennai",
        "state": "Tamil Nadu",
        "pincode": "600000"
    },
    "phoneNumbers": [
        {
            "type": "home",
            "number": "123-456-789"
        },
        {
            "type": "personal",
            "number": "555-555-5555"
        }
    ],
    "isStudent": true
}

//                                                 for loop 

var jsonArray = [ { "name": "krish", "age": 42 },{ "name": "king", "age": 67 },{ "name": "danny", "age": 35 }]; //array of objects

for (var i = 0; i < jsonArray.length; i++)
 {
    console.log(jsonArray[i].name + " is " + jsonArray[i].age + " years old.");
 }
/*output:
 krish is 42 years old.
 king is 67 years old.
 danny is 35 years old.*/

 //                                              for Each loop 

 jsonArray.forEach(function(element) {
    console.log(element.name + " is " + element.age + " years old.");
});
/*output
 krish is 42 years old.
 king is 67 years old.
 danny is 35 years old.*/

 //                                                for of loop 

 for (var element of jsonArray) {
    console.log(element.name + " is " + element.age + " years old.");
}
/*output
krish is 42 years old.
king is 67 years old.
danny is 35 years old.*/

//                                                for in loop

var jsonObject = { "name": "krishna", "age": 23, "address": { "street": "100 Main Street", "city": "Chennai", "state": "Tamil Nadu" } };

for (var key in jsonObject) {
    console.log(key + ": " + jsonObject[key]);
}
/*output
name: krishna
age: 23
address: [object Object]*/

//for, for...of, and forEach() are all commonly used to iterate through the elements of an array in JavaScript.
//for...in used to iterate over the properties of an object in JavaScript.
//to use other loops in object you need to convert objects into a array and then you can use the  (for, for...of, and forEach())
//there are several ways to convert an object into an array. Some of the most commonly used methods are:
//1.Object.keys()
//2.Object.values()
//3.Object.entries()

//                                          2.create your own resume in JSON format
let resume={
    "personal_info": {
        "name": "Krishna Moorthy",
        "email": "Krishnamalathi2000@gmail.com",
        "phone": "555-555-5555"
    },
    "experience": [
        {
            "position": "Billing Executive",
            "company": "abhi vairavan's plumbing co.",
            "start_date": "2020-08-01",
            "end_date": "2022-12-31",
        }
    ],
    "education": [
        {
            "degree": "Bachelor of Science in Physics With Computer Application",
            "college":"st joseph's college",
            "graduation_year": "2020"
        }
    ],
    "skills": [
        "Excel", "Word","Type_Writing","Basic_computer_Knowledge "
    ]
}

//                                3.read about about the differents between the window,screen and document in javascript
/*
In JavaScript, the window, screen, and document objects are all used to access different aspects of the web browser and the current web page.
•	The window object represents the current browser window and provides access to the browser's session history, the current URL, and other properties and methods of the browser window. For example, you can use the window.open() method to open a new browser window, the window.alert() method to display an alert message, and the window.innerWidth and window.innerHeight properties to get the width and height of the current window.
•	The screen object provides information about the user's display screen, such as the screen's resolution, color depth, and available screen size. For example, you can use the screen.width and screen.height properties to get the width and height of the user's screen, and the screen.availWidth and screen.availHeight properties to get the available width and height of the user's screen.
•	The document object represents the current web page and provides access to the contents of the web page, including the HTML elements, CSS styles, and JavaScript scripts. For example, you can use the document.getElementById() method to access a specific element on the web page, the document.createElement() method to create a new element, and the document.querySelector() method to select elements using a CSS selector.
In summary, the window object represents the browser window, the screen object represents the display screen, and the document object represents the current web page. Each object provides different properties and methods to access different aspects of the web browser and the current web page.

*/

