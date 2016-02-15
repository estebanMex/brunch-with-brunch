
var hello = require('scripts/helloWorld').hello;

console.log(hello());
$(function(){
  document.getElementById('hello').innerText = hello();
});
