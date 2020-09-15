
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