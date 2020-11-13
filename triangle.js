const checkTriangle =(side1, side2, side3) =>{
        
    let result=""
    const list =[side1, side2, side3]
    const max_side=Math.max(side1, side2, side3)
    // const total_sum =side1 + side2 + side3
    const total_sum =list.reduce((pv, cv) => pv + cv, 0);
    const min_size=total_sum - max_side
    if (side1 <= 0 || side2 <= 0 || side3 <= 0){
        result= "illegal side"
    } else if (max_side >= min_size){
        result= "Triangles Violating Triangle Inequality"
    }else if (side1 == side2 && side2 == side3){
        result= "equilateral"
    }else if (side1 == side2 || side1 == side3 || side2 == side3){
        result= "isosceles"
    } else{
        result= "scalene"
    }
    
    return result
  }
  
  const input = document.querySelector("#input")
  const submit = document.querySelector("#submit")
  const result =document.querySelector("#result");
  function show(){
      
      if (isNaN(parseInt(input.value))){
        result.innerText="invalid entery"
        input.value=""
        input.focus()
        
      }else if(input.value.split(",").length <3 || input.value.split(",").length >3) {
        result.innerText="invalid entery"
        input.value=""
        input.focus()
       
      }else {
        result.innerText= checkTriangle(input.value.split(",")[0],input.value.split(",")[1],input.value.split(",")[2])
        input.focus()
      }
    //   console.log(input.value)
  }

  submit.addEventListener('click', show)