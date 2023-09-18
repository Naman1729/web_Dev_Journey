// Dates

let myDate = new Date();
console.log(myDate); // output => 2023-09-17T18:14:52.578Z
console.log(myDate.toString()); // output => Sun Sep 17 2023 23:44:52 GMT+0530 (India Standard Time)
console.log(myDate.toDateString()); // output => Sun Sep 17 2023
console.log(myDate.toISOString()); // output => 2023-09-17T18:14:52.578Z
console.log(myDate.toUTCString()); // output => Sun, 17 Sep 2023 18:14:52 GMT
console.log(myDate.toLocaleDateString()); // output => 17/9/2023
console.log(myDate.toLocaleTimeString()); // output => 11:44:52 pm
console.log(myDate.toLocaleString()); // output => 17/9/2023, 11:44:52 pm
console.log(myDate.toTimeString()); // output => 23:44:52 GMT+0530 (India Standard Time)
console.log(myDate.toJSON()); // output => 2023-09-17T18:14:52.578Z

console.log(typeof myDate); // output => object

let myDate2 = new Date(2023, 0, 23);
console.log(myDate2.toString());

let myDate3 = new Date("2023-09-17");
console.log(myDate3.toString());

let myTimeStamp = Date.now();
console.log(myTimeStamp); // output => 1694979583090 ms from 1st Jan 1970

console.log(myDate2.getTime()); // output => 1674412200000 ms from 1st Jan 1970

console.log(Math.floor(Date.now() / 1000)); // this will give us the current time in seconds from 1st Jan 1970

let newDate = new Date();
console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getDay());
console.log(newDate.getMonth() + 1);

console.log(
  newDate.toLocaleString("default", {
    month: "long",
    weekday: "long",
  })
); // output => September
