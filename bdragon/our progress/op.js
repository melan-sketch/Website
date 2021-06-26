//login

function openForm() {
    document.getElementById("myForm").style.visibility = "visible";
}
function showEdit() {

    document.getElementById("editor").style.visibility = "visible";

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
            document.getElementById("new-edit").style.visibility = "visible";
            return true;
        }
    }

    alert('WRONG password or username!');
    return false;
}

