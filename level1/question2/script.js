//Console.log out elements in JSON file


function parseJSON() {
var obj = fetch('author.json').then(function(response) {
    return response.json();
  }).then(function(parsedJson) {
    console.log(parsedJson);
  });
 
var myArray = obj;
var i = 0;

for (i < myArray.lenght; i++) {
  
}


};


