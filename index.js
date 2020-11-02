function validate() {
  //fields
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let number = document.getElementById("number").value;
  //form
  let form = document.getElementById("form");
  //error message
  let error = document.getElementById("error");
  //variable message
  let message;
  //if name is blank or less/equal to 6 characters 
  if(name.length == 0) {
    message = "All fields must be filled out"
    error.innerHTML = message;
    return false;
  } else if(name.length >=1 && name.length <= 6) {
    message = "Full name must be used"
    error.innerHTML = message;
    return false;
    } 
  
  //if email is blank or doesn't contain @
  if(email.length == 0) {
    message = "Email and Phone field must be filled out"
    error.innerHTML = message;
    return false;
  } else if(email.indexOf("@") == -1) {
    message = "Valid email must be used"
    error.innerHTML = message;
    return false;
    }

  //if phone number doesn't include area code
  if(number.length == 0) {
    message = "Phone number field must be filled out"
    error.innerHTML = message;
    return false;
  } else if(number.length >=1 && number.length < 10) {
    message = "Number must include area code"
    error.innerHTML = message;
    return false;
    }

  alert ("Thank you for your support");
  return true;

  
}
