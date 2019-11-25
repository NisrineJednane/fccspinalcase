//fcc "spinal tap case": turn string to slug 
//ES6 arrow function + regex:

const spinalCase = (str) => {
  return str
    .trim()                     //trim whitespace from front & end
    .split(/\s+|_|(?=[A-Z])/)   //split string incase of whitespace, underscore or capital letter  
    .join("-")                  //join using upperscore 
    .toLowerCase();             //convert to lower case
}
