//Coding Challenge 1
function triArea(base, height) {  return base * height/2;}

//Coding Challenge 2
function hello() { return "hello edabit.com"}

//Coding Challenge 3
function FirstReverse(str) {  return str.split('').reverse().join('');}

//Coding Challenge 4
function LongestWord(sen) { 

    var words = sen.match(/\w+/g);
    
    var longest = words[0];
 
     for (var i=0; i<words.length; i++) {
         if (words[i].length > longest.length) {
             longest = words[i];
         }
     }  
     
    return longest; 

}

//Coding Challenge 5
function addUp(num) {
    return (num * (num + 1))/2;
}