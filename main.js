# Whale-Talk
/**project from Codecademy — JavaScript Syntax: Loops*/

/*creating variables*/
let input  = '' //input random sentence(s)
let vowels = ['u','o','a','i','e'] //whales vowels
let resultArray = [] //result as translated into whale talk

/*make the magic happen*/
//the for loopset a statement before the loop starts; define the condition; 
increase the value the loop has been executed
for (let i = 0; i < input.length; i++) { 
  for (let j = 0; j < vowels.length; j++) {
  //compare each input characters with the vowels individually 
    if (input[i] === vowels[j]) {
      resultArray.push(vowels[i]) //add the matching character to the result array
        if (input[i] === 'u' || input[i] === 'e') {
          resultArray.push(vowels[i]) //double the 'u' and 'e'
    }
  }
}
console.log(resultArray.join('').toUpperCase()) //print−out the result 

/*The version I did in Codecademy*/
let input ='if i die today' //preferred phrase as input 
let vowels = ['a', 'e', 'i', 'o', 'u'] //vowels array for whales
let resultArray = [] //empty result array for storing vowels from input string

//for loops for comparing input variable's text to the vowels array
for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < vowels.length; j++) {
    //comparing input letter to every letter in the vowels array
    if (input[i] === vowels[j]) {
      resultArray.push(input[i]) //pushing the characters from in put that are vowels to the result array
      //to double the 'e' and 'u' vowels 
      if (input[i] === 'e' || input[i] === 'u') {
      resultArray.push(input[i])
      }
    }
  } 
}
console.log(resultArray.join('').toUpperCase()) //printing the result
