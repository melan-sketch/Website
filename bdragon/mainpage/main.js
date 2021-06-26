//login

function openForm() {
    document.getElementById("myForm").style.visibility = "visible";
}
function showEdit() {

    document.getElementById("edit1").contentEditable = "true";
    document.getElementById("edit2").contentEditable = "true";
    document.getElementById("edit3").contentEditable = "true";
    document.getElementById("edit4").contentEditable = "true";

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
    var el;
    var prefix = 'edit';
    for (var i = 0; el = document.getElementById(prefix + i); i++) {

       localStorage.userEdits = el.innerHTML;
        alert("Edits saved!");
    }

}

function checkEdits() {
    //find out if the user has previously saved edits

        if (localStorage.userEdits != null)
            el.innerHTML = localStorage.userEdits;
    }