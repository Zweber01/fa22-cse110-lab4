function callTime(){
    var d = new Date();
    var time = d.toLocaleTimeString();
    console.log(time);
}
setInterval(callTime(), 1000);
