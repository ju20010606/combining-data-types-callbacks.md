const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0]

const panagram = ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog']



//Every
//1
 console.log(nums.every(element=>element>=0))
//2
for(let i = 0; i<panagram.length; i++){
  const panagramSplit = panagram[i].split("")
  panagramSplit.every(element=>element<8)
}


//Find
// 1
nums.find(element=> element%5===0)
// 2
panagram.find(element=> element.length >= 5)


//Filter
//1
 nums.filter(element=> element<4)
//2
 panagram.filter(element=> (element.length)%2===0)

//Find Index
//1
nums.findIndex(element=> element%3===0)
//2
panagram.findIndex(element=> (element.length)<2)

//For Each
//1
nums.forEach(element=>console.log(element*3))
//2
panagram.forEach(element => console.log(element,"!"))
//Map
//1
nums.map(element=>element*100)
//2
panagram.map( element => element.toUpperCase())

//Some
//1
nums.some(element=> element%7===0)
//2
panagram.some(element=> element.includes("a"))