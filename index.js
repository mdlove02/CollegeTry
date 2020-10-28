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
  if(name.value === null) {
    message = "All fields must be filled out"
    error.innerHTML = message;
    return false;
  } else if(name.length < 6) {
    message = "Full name must be used"
    error.innerHTML = message;
    return false;
    }
  
  //if email is blank or doesn't contain @
  if(email.value === null) {
    message = "Email field cannot be empty"
    error.innerHTML = message;
    return false;
  } else if(email.indexOf("@") == -1) {
    message = "Valid email must be used"
    error.innerHTML = message;
    return false;
    }

  //if phone number doesn't include area code
  if(number.value === null) {
    message = "Field must be filled out"
    error.innerHTML = message;
    return false;
  } else if(number.length < 10) {
    message = "Must enter full phone number"
    error.innerHTML = message;
    return false;
    }

  alert ("Thank you for your support");
  return true;

  
}
