function validate() {
  //fields
  let name = document.getElementById("name");
  let email = document.getElementById("email");
  let number = document.getElementById("number");
  //form
  let form = document.getElementById("form");
  //error message
  let error = document.getElementById("error");
  //variable message
  let message;
  //if name is blank or less/equal to 6 characters
  if(name.value == "" || name.length <= 6) {
    message = "Name must be filled out"
    error.innerHTML = message;
    return false;
  }
  
  //if email is blank or doesn't contain @
  if(email.value == "" || email.indexOf("@") == -1) {
    message = "Email must be filled out"
    error.innerHTML = message;
    return false;
  }

  //if phone number doesn't include area code
  if(number.value == "" || number.length < 10) {
    message = "Must enter full phone number"
    error.innerHTML = message;
    return false;
  }
  alert ("Thank you for your support");
  return true;
 
  
}