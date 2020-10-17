function validate(); {
  let signup = document.getElementById("signup")
  let name = document.getElementById("name")
  let email = document.getElementById("email")
  let number = document.getElementById("number")
  let error = document.getElementById("error")

  let message;
  if(name.length < 6 || name.value == "") {
    message = ("Full name is required!")
    error.innerHTML = message;
  } 

  if(email.length < 10 || email.indexOf("@") == -1){
    message = ("Valid email is required!")
    error.innerText = message;
  }

  if(number.length < 10){
    message = ("Area code must be entered!")
    error.innerText = message;
  }
  

}
  
      
      
    

   
  
    
    
    
    
    
     


    

