/**Form */

function validate() {
  //fields
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const number = document.getElementById("number").value;
  //form
  const form = document.getElementById("form");
  //error message
  let error = document.getElementById("error"); //create an error message array so it throws out all errors possible 
  
  //let error = ["All fields must be filled out", "Full name must be used", "Valid email musty be used", "Phone number must include area code"];

  
  
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

/**Calculation */

function change_weight() {
  let input = document.getElementById("input")
  let result = document.getElementById("result")
  let inputType = document.getElementById("inputType");
  let resultType = document.getElementById("resultType");
  let inputTypeValue;
  let resultTypeValue;

  inputTypeValue = inputType.value;
  resultTypeValue = resultType.value;

  input.addEventListener("keyup", change_weight);
  inputType.addEventListener("change", change_weight);
  resultType.addEventListener("change", change_weight);

  //conversion of lbs
  if(inputType.value == "lbs" && resultType.value == "ounces") {
    result.value == number(input.value)*16;
  }else if(inputType.value == "lbs" && resultType.value == "grams") {
    result.value == number(input.value)*454;
  }else if(inputType == "lbs" && resultType.value == "lbs") {
    result.value == number(input.value);
  }

  //conversion of ounces
  if(inputType.value == "ounces" && resultType.value == "lbs") {
    result.value == number(input.value)/16;
  }else if(inputType.value == "ounces" && resultType.value == "grams") {
    result.value == number(input.value)*28.35;
  }else if(inputType == "ounces" && resultType.value == "ounces") {
    result.value == number(input.value);
  }

  //conversion of grams
  if(inputType.value == "grams" && resultType.value == "lbs") {
    result.value == number(input.value)/454;
  }else if(inputType.value == "grams" && resultType.value == "ounces") {
    result.value == number(input.value)/28.35;
  }else if(inputType == "grams" && resultType.value == "grams") {
    result.value == number(input.value);
  }	 
  


}