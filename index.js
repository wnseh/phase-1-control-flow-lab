function scuberGreetingForFeet(distance){
  // // Write your code here!
  // if (distance <= 400){
  //   return "This one is on me!"
  // }
  switch(true){
    case distance<=400:
      return "This one is on me!";
    case distance>2500:
      return "No can do."
      break;
    case distance>2000:
      return "I will gladly take your thirty bucks.";
      break;

  }

}

function ternaryCheckCity(city){
  // Write your code here!
  switch(true){
    case city === "NYC":
      return "Ok, sounds good."
    default:
      return "No go."
  }
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  switch(true){
    case tip === "generous":
      return "Thank you so much."
    case tip === "not as generous":
      return "Thank you."
    default:
      return "Bye."

  }
}