

document.getElementById('submitButton').onclick = getBirthday


function getBirthday() {
    const mainContentWindow = document.getElementById('mainContent'); 
    const birthday = document.getElementById('inputData').value;
    document.getElementById("displayZodiac").innerText = birthday;
    if (mainContentWindow.style.visibility === "hidden") {
        mainContentWindow.style.visibility = "visible";
    } 
}