// use => instead of function()
// option1
const createGreeting = (message, name) => {
  return message + ", " + name + "!";
}
console.log(createGreeting("Hi message", "Mei"));
// **Note: if there are multiple parameters you must put the () around them.
// **Note: if you have to go to a different line you MUST use {}
//**Self Note: I'm going to always use the (parameters) even if it is only one parameter
//**Self Note: All functions should have const in front of them from now on!

const createGreeting2 = (message, name) => message + ", " + name + "!"; 
console.log(createGreeting2("Message: Hi ", "Mei"));


