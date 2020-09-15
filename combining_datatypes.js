
//---------Combine objects, arrays, and functions----------
//Question 1
var crayonBox = {
    crayons:["yellow","pink","blue"]
  }
  console.log(crayonBox.crayons[1])
  
//Question 2
  
  var bottle = {
     cap: {
      material: "plastic",
      color: "blue",
      beverage: "water"
    }
  }
  
  console.log(bottle.cap.material)
  
  //Question 3
  receipt = [
     {
      name: "bread",
      price: 9.99
    }
  ]
  
  console.log(receipt[0].name)
  
  //Question 4
  apartmentBuilding  = [
    tenants = ["Samuel","Daniel","Jessie"]
  ]
  
  console.log(apartmentBuilding[0][1])

  //-----Combine objects, arrays, and functions more than one level deep----

//Question 1
const knit = () =>{
    var object = {
      item: "scarf",
      size: "6ft"
    }
    return (object.item)
  }
  console.log(knit())
  
  //Question 2
  crayonSelector = () =>{
    return crayonBox = {
   crayons:["yellow","pink","blue"]
   } 
  }
  crayonSelector().crayons[0]
  
  //Question 2
  powerButton = () =>{
    return options = () =>{
      console.log("select a song")
    }
  }
  powerButton()()

  //----- Model a Vending Machine -----

vendingMachine = {
    snacks: [
      {name:"doritos",price:5.99},{name:"lays",price:4.99},{name:"cheetos",price:6.99}
      ],
    vend: vend = (index) =>{
     return vendingMachine.snacks[index]
    }
  }
  
  vendingMachine.vend(0)

  //------Callbacks-----
//Question 1
const add = (num1,num2) => {
    return num1 + num2
  }
  add(2,3)
  
  //Question 2
  const substract = (num1,num2) => {
    return num1 - num2
  }
  substract(5,4)
  
  //Question 3
  const multiply = (num1,num2) => {
    return num1*num2
  }
  multiply(5,4)
  
  //Question 4
  const divide = (num1,num2) => {
    return num1/num2
  }
  divide(10,2)
  
  //Question 5 & 6
  const calculate = (num1,num2,callback) =>{
   return callback(num1,num2)
  }
  
  //Question 7
  
  calculate(10,5,add)
  calculate(10,5,substract)
  calculate(10,5,divide)
  calculate(10,5,multiply) 
  
  //Function definition placement
  
  const bar = () => {
      console.log('bar here');
  }
  
  const foo = () => {
      console.log('foo here');
  }
  bar()
  foo()
  
  //Error reading 
  
  //What is meant by the error(s) this produces?
  // An arrow function cannot be invoked before it is defined 
  
  foo();
  
  const foo ()=>{
      console.log('hi');
  }