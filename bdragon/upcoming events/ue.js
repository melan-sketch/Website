//Countdown from Opening Time
var countDownDate = new Date("August 22, 2021 00:00:00").getTime();
//Countdown Formula
var countdownfunction = setInterval(function () {

    var now = new Date().getTime();

    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("date").innerHTML = days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";

    if (distance < 0) {
        clearInterval(countdownfunction);
        document.getElementById("date").innerHTML = "EXPIRED";
    }
}, 1000);

//login

function openForm() {
    document.getElementById("myForm").style.visibility = "visible";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}


var objInfo = [
    { idname: "admin", password: "1010" },
]

function checkPassword() {
    var idname = document.getElementById("idname").value
    var password = document.getElementById("password").value

    for (i = 0; i < objInfo.length; i++) {
        if (idname == objInfo[i].idname && password == objInfo[i].password) {
            alert('right password!');
            return true;
        }
    }

    alert('WRONG password or username!');
    return false;
}



