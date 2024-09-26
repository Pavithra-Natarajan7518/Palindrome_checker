var input=document.querySelector(".input-box")
var result=document.querySelector(".result")
function palindrome()
{
var data=input.value 
let cleanedStr = data.toLowerCase().replace(/[^a-z0-9]/g, '');
console.log(cleanedStr)
let reversedStr = cleanedStr.split('').reverse().join('');
console.log(reversedStr)

if(cleanedStr==reversedStr)
{
    result.innerHTML="It is palindrome"
}
else
   result.innerHTML="It is not a palindrome"
}
