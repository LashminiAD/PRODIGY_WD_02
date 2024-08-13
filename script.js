let [milliseconds, seconds, mintues, hours] = [0, 0, 0, 0];
let timeRef = document.querySelector(".time");
let lapRef = document.querySelector(".time1");
let a = null;
document.getElementById("start").addEventListener("click",
    () => {
        if(a !== null) {
            clearInterval(a);
        }
        a = setInterval(displayTimer, 10);
    });
    
    document.getElementById("pause").addEventListener("click", 
    () => {
        clearInterval(a);
    });
    
    document.getElementById("reset").addEventListener("click",
        () => {
            clearInterval(a);
            [milliseconds, seconds, mintues, hours] = [0, 0, 0, 0];
            timeRef.innerHTML = "00 : 00 : 00 : 000";
        });

        document.getElementById("lap").addEventListener("click",
            () => {
                lapRef.innerHTML = hours+ " : " +mintues+ " : " +seconds+ " : " +milliseconds;
        });
        
        document.getElementById("lr").addEventListener("click",
            () => {
                lapRef.innerHTML = "00 : 00 : 00 : 000";
        });
        
    
function displayTimer() {
    milliseconds += 10;
    if(milliseconds == 1000) {
        milliseconds = 0;
        seconds++;
        if(seconds == 60) {
            seconds = 0;
            mintues++;
            if(mintues == 60) {
                mintues = 0;
                hours++;
            }
        }
    }
    let h = hours < 10 ? "0" + hours : hours;
    let m = mintues < 10 ? "0" + mintues : mintues;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let ms =
        milliseconds < 10
        ? "00" + milliseconds
        : milliseconds < 100
        ? "0" + milliseconds
        : milliseconds;

    timeRef.innerHTML = `${h} : ${m} : ${s} : ${ms}`;
}