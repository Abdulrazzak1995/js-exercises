/*
  Conditionals
  ---------------------------------
  Add an if statement to check Daniel's role in a CYF class.
  If Daniel is a mentor, print out "Hi, I'm Daniel, I'm a mentor."
  If Daniel is a student, print out "Hi, I'm Daniel, I'm a student."
*/
function appler(){
var name = "Daniel";
var danielsRole = "mentor";
var danielsRole = "student";
return danielsRole === 'student' ? "Hi, I'm Daniel, I'm a student" :"Hi, I'm Daniel, I'm a mentor." 
}
/* 
EXPECTED RESULT
---------------
Hi, I'm Daniel, I'm a mentor.
*/
console.log(appler());