'use strict';

let str = "Hello";
let results;
encode(str);
decode(results)

//TODO testing with receiving results
function decode(str){
  console.log('results decode ', results);
}

function encode(str){
  var strArray = str.split('').map(function(element){
    // console.log(element.charCodeAt(0).toString(16));
        return element.charCodeAt(0).toString(16);
  });
  results = strArray.join("");
  return results;
}

function encodeArc(str) {

}

module.exports = {decode,encode,encodeArc}
