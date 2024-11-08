const input = document.querySelector('input')
let inputText = document.getElementById('text-input')
const checkBtn = document.getElementById('check-btn')
const result = document.getElementById('result')
const required = document.getElementById('required')

// let string1 = "abcd"
// let string2 = [];

// for(i = string1.length - 1; i >= 0; i--){
//   string2.push(string1[i]);
// }

// console.log(string2)
// console.log(string2.join() === string2)

//Input Text event listener
input.addEventListener('change', () => {

  inputText.value = input.value.toLowerCase()

})
let textInput = inputText.value
console.log(textInput)


//Listener for the click event
checkBtn.addEventListener('click', () =>{
  if(textInput == ''){
    required.innerHTML = "Input Text is Required"
  }else{
    console.log(checkPalindrome(textInput))
  }

  
})

//Check Palindrome Function
const checkPalindrome = (inputText) => {
  let reverseText = []

  for(let i = inputText.length; i >= 0; i--){
    reverseText.push(inputText[i])
  }
  //console.log(reverseText.join(''))
  let isPalindrome

  if(reverseText.join('') === inputText){
    isPalindrome = true
  }else{
    isPalindrome = false
  }

  return isPalindrome
}

//console.log(checkPalindrome("hello"))