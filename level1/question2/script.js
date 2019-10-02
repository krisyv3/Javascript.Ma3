//Console.log out elements in JSON file


function logJson() {

  var i;
  var myArray =
  {
    "video": [{
      "id": 12312412312,
      "name": "Ecuaciones Diferenciales",
      "url": "/video/math/edo/12312412312",
      "author": {
        "data": [{
          "name_author": "Alejandro Morales",
          "url": "/author/alejandro-morales",
          "type": "master"
        }]
      }
    }]
  };

  var entries = Object.entries(myArray.video[0])
  var secondEndtries = Object.entries(myArray.video[0].author.data[0]);

  for( i = 0; i < entries.length; i++) {
    console.dir(entries[i]);
  }

  for( i = 0; i < secondEndtries.length; i++) {
    console.dir(secondEndtries[i]);
  }

};
