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

function decode(str){
  return str
    .split(',')
    .map(e => String.fromCharCode(parseInt(e,16)))
    .join('');
}

function encode(str){
  return str
    .split('')
    .map(e => e.charCodeAt(0).toString(16))
    .join(',')
}

function encodeArc(str){
  return encode(str)
    .split(',')
    .join('')
    .split('')
    .map(e => parseInt(e,16) * 22.5)
    .join('');
};

module.exports = {decode,encode,encodeArc}
