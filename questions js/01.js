/**
 * 
 1. Write a JavaScript program to display the current day and time in the following format.  
Sample Output : Today is : Tuesday.
Current time is : 10 PM : 30 : 38
 */
function getCurrentDateTime() {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const today = new Date();
  const dayOfWeek = today.getDay();
  console.log(`Today is : ${daysOfWeek[dayOfWeek]}`);

  console.log(
    `Current time is ${today.getHours()} PM : ${today.getMinutes()} : ${today.getSeconds()}`
  );
}

getCurrentDateTime();
