/*project stage number 4
Alaa laghoub
U20104610*/

///////////////elert window when user resets or submits///////////
function showAlertS() {
    if (confirm("Are you sure you want to submit your message? ")) {

    } else {

    }

}
function showAlertR() {

    if (confirm("Are you sure you want to reset your message? ")) {

    } else {

    }

}

///////////////////////////STILL ADDING PHP FOR THIS TO WORK///////////////////////////////////
const form = document.querySelector("form"),
statusTxt = form.querySelector(".button-area span");

form.onsubmit = (e) => {
    e.preventDefualt(); // prevent form from submitting 
    statusTxt.style.display = "block";

    let xhr = new XMLHttpRequest();//creating new xml object
    xhr.open("POST", "contactus.php", true); //sending post request to message.php file

    xhr.onload = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
            let response = xhr.response; // storing ajax response in a response var
            if(response.indexOf("Email and password field are required!")!= -1 || response.indexOf("Enter a valid email address!") || response.indexOf("Sorry, failed to send your message!")) {
                statusTxt.style.color="red";
            }
            statusTxt.innerText = response;
        }
    }
    let formData = new FormData(form);
    xhr.send(formData);
}