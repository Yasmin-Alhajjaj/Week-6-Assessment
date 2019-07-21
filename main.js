console.log('GOOD LUCK 👩‍💻 👨‍💻')
/* Q1:


var arrOfObj1 = [
  { a: 12 },
  { b: 5 },
  { c: 16 },
  { d: 4 },
  { e: 3 }
]

Ex: addKeyPowerIndex(arrOfObj1)
=> [
  {0: 0, a: 12},
  {1: 1, b: 5},
  {2: 4, c: 16},
  {3: 9, d: 4},
  {4: 16, e: 3}
] 

var arrOfObj2 = [
  { a: 'cat' },
  { b: 'dog' },
  { c: 'duck' }
]

Ex: addKeyPowerIndex(arrOfObj2)
=> [
  {0: 0, a: 'cat'},
  {1: 1, b: 'dog'},
  {2: 4, c: 'duck'}
]

Usind For Each
Create a function called addKeyPowerIndex
that takes an array of objects as a parameter
and return this array with add a key to each object
that is the (index) of this object in this array
and the value will be the (power) of the index
*/

function addKeyPowerIndex(array) {
  // WRITE YOUR CODE UNDER THIS LINE 
  var result=[];
 // var index=0;
  array.forEach((element,index)=> {
  element[index]=index*index 
   // index++
  });
  

return array;
}
console.log( addKeyPowerIndex([
  { a: 'cat' },
  { b: 'dog' },
  { c: 'duck' }
]))

console.log( addKeyPowerIndex([
  { a: 12 },
  { b: 5 },
  { c: 16 },
  { d: 4 },
  { e: 3 }
]))






/* Q2:
Usind Map
Create a function called decreseBy
that takes an array of numbers and number as a parameter
and return a new array after will decrease this number 
from each element in this array

var arrOfNum1 = [77,5,33]
Ex: decreseBy(arrOfnum1,10)
=> [67,-5,23]

Ex: decreseBy(arrOfNum1,-6)
=> [83, 11, 39]
*/
var arrOfNum1 = [77,5,33]
function decreseBy(array,num) {
  // WRITE YOUR CODE UNDER THIS LINE 
var result=[];
result= array.map(element=>element-num)

return result;
}
console.log( decreseBy(arrOfNum1,10))
console.log( decreseBy(arrOfNum1,-6))




/* Q3:


var arrOfObj4 = [
  { name: "alex" },
  { name: "mercer"},
  { name: "alice" },
  { name: "zaheer"},
  { name: "elizabeth"}
]
Ex: nameLongerThan(arrOfObj4,4)
=>[
  { name: "mercer"},
  { name: "alice" },
  { name: "zaheer"},
  { name: "elizabeth"}
]

Ex: nameLongerThan(arrOfObj4,6)
=>[
  { name: "elizabeth"}
]

Using Filter
Create a function called nameLongerThan
that takes an array of objects and number as a parameter
and return a new array with only the object has a value inside 
the key name longer than this number
*/
var arrOfObj4 = [
  { name: "alex" },
  { name: "mercer"},
  { name: "alice" },
  { name: "zaheer"},
  { name: "elizabeth"}]

function nameLongerThan(array,num) {
  // WRITE YOUR CODE UNDER THIS LINE
  var result=[];
result= array.filter(element=>(element.name).length>num)
  
return result;
}
console.log(nameLongerThan(arrOfObj4,4))
console.log(nameLongerThan(arrOfObj4,6))







/* Q4:
Using Reduce
Create a function called avgLength
that takes an array of objects of strings and key as a parameter
and return the avg of the length of this key inside this objects

var arrOfObj4 = [
  { name: "alex", food: "fried chiken" },
  { name: "mercer", food: "pizaa" },
  { name: "alice", food: "burger" },
  { name: "zaheer", food: "hot dog" },
  { name: "elizabeth", food: "eggs" }
]
Ex: avgLength(arrOfObj4,"name")
=> 6

Ex: avgLength(arrOfObj4,"food")
=> 6.8
*/
var arrOfObj4 = [
  { name: "alex", food: "fried chiken" },
  { name: "mercer", food: "pizaa" },
  { name: "alice", food: "burger" },
  { name: "zaheer", food: "hot dog" },
  { name: "elizabeth", food: "eggs" }
]

/* function avgLength(array,str) {
  // WRITE YOUR CODE UNDER THIS LINE         
var result;
result= array.reduce(function(total,cur){
total=total.length+(cur.str).length

return total
},(array[0].str.length))

return result;
}
console.log(avgLength(arrOfObj4,"name"))
// Good luck :) */

function avgLength(array,str) {
  var result;
  var i=0
  result= array.reduce(function(total,cur){
    total=total+cur[str].length
   i=i+1


    return total
  
  },0)




  return result/i;
}
console.log(avgLength(arrOfObj4,"name"))
console.log(avgLength(arrOfObj4,"food"))

