const input = document.querySelector('input')

const checkBtn = document.getElementById('check-btn')
const result = document.getElementById('result')

// let string1 = "abcd"
// let string2 = [];

// for(i = string1.length - 1; i >= 0; i--){
//   string2.push(string1[i]);
// }

// console.log(string2)
// console.log(string2.join() === string2)

//Input Text event listener
input.addEventListener('change', () => {

  const inputText = input.value.toLowerCase()
  console.log(inputText)

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

console.log(checkPalindrome("hello"))