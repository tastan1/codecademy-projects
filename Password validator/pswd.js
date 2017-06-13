
function hasLowerCase(input) {
  for (var i = 0; i < input.length; i++){
    if (input[i] === input[i].toLowerCase()){
      return true;
    } 
  }
}

function hasUpperCase(input) {
  for (var i = 0; i < input.length; i++){
    if (input[i] === input[i].toUpperCase()){
      return true;
    } 
  }
}
function isLongEnough(input) {
  if ( input.length >=8){
      return true;
  }  
}

function hasSpecialChar(input){
  var specialChar = ["!","@","#","$", "%", "&", "*", "?", "+","~", "^"];
  
  for (var c = 0; c < input.length; c++){
    for (var k = 0; k < specialChar.length; k++){
      if (input[c] === specialChar[k])
        {
          return true;
        } 
    }
  }
}


function isPasswordValid(input){
 /* if (hasUpperCase(input)){
    console.log("Password Is Valid");
  } */
  if(!hasUpperCase(input)){
    console.log("Invalid");
  } 
  if(!hasLowerCase(input)){
    console.log("Invalid");
  }
  if(!isLongEnough(input)){
    console.log("Invalid");
  }
  if(!hasSpecialChar(input)){
    console.log("Invalid");
  }
  if (hasUpperCase(input) && hasLowerCase(input) && isLongEnough(input) && hasSpecialChar(input)){
    console.log("Password is Valid!");
  }
}

isPasswordValid("Mooooooo$");