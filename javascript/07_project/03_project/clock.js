const clock = document.getElementById("clock");

// let date = new Date();
// clock.innerText = date.toLocaleTimeString();

setInterval(function () {
    let date = new Date();
    clock.innerText = date.toLocaleTimeString();
}, 1000);
