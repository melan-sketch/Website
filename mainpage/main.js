//login

function openForm() {
    document.getElementById("myForm").style.display = "block";
}
function showEdit() {
    document.getElementsByClassName("edi").contentEditable = 'true';
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

function saveEdits() {

    var editElem = document.getElementById("edit");

    var userVersion = editElem.innerHTML;

    localStorage.userEdits = userVersion;

    document.getElementById("update").innerHTML = "Edits saved!";
}

function checkEdits() {
    //find out if the user has previously saved edits
    if (localStorage.userEdits != null)
        document.getElementById("edit").innerHTML = localStorage.userEdits;
}

