/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}


/* End Given Code, don't edit above here...*/


function greet(the_time) {
  let this_time = the_time.split(":");
 let hours = this_time[0];
  let the_hour = parseInt(hours)

  if (the_hour < 12) {
    return "Good Morning";
  }

    // else if ((this_time >= 1200) && (this_time <= 1700)) {
    //   return "Good Afternoon";
    // }

      else if (the_hour > 17 ) {
      return "Good Evening";
    }

    else {
      return "Good Afternoon";
    }

  
}

function displayMessage(message) {
 const elem = document.getElementById("greeting")
elem.textContent = message

}


/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
