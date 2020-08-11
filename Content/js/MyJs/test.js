
function checkStatus(sourceId, targetId) {
    var checkBox = document.getElementById(sourceId);
    var formControl = document.getElementById(targetId);

    if (checkBox.checked) {
        formControl.style.display = "block";
    }
    else {
        formControl.style.display = "none";
    }
}
