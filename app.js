document.body.style.backgroundColor = "black";
let test = document.querySelector("#test");
let date;
window.onload = function() {
    let myVar = setInterval(function(){
        let today = new Date();
        let dateLocal = (today.getMonth() + 1) + "/" + today.getDate() + "/" + today.getFullYear();
        let hours = today.getHours();
        let amPm;
        if (hours < 13) {
            amPm = "a.m"
        } else {
            amPm = "p.m"
        }
        if (hours > 12) {
            hours = hours - 12;
        } else if (hours == 0) {
            hours = 12;
        }
        let minutes = today.getMinutes()
        if (minutes < 10) {
            minutes = "0" + minutes;
        }
        let seconds = today.getSeconds()
        if (seconds < 10) {
            seconds = "0" + seconds;
        }
        let time = hours + ":" + minutes + ":" + seconds + "  " + amPm;
        let dateTime = dateLocal + "        " + time;
        date = dateTime;
        test.innerHTML = date;

    }, 1000)
    test.innerHTML = "this stuff now";
}