const submitButton=document.getElementById("submitbtn");
const inputName=document.getElementById("nameinput");
const inputEmail=document.getElementById("emailinput");
const inputPassword=document.getElementById("passwordinput");
const inputConfirmPassword=document.getElementById("confirmPasswordinput");
const alertmsg=document.getElementById("alertmsg");

function generateRandomToken() {
    const randomBytes = new Uint8Array(16);
    window.crypto.getRandomValues(randomBytes);
    const token = Array.from(randomBytes, byte => ('0' + (byte & 0xFF).toString(16)).slice(-2)).join('');
    return token;
  }


submitButton.addEventListener('click', (e)=>{
    e.preventDefault();
    if(inputName.value==="" || inputEmail.value==="" || inputPassword.value === "" || inputConfirmPassword.value===""){
        alertmsg.innerHTML="Error:All fields are mandatory!";
        return false;
    }

    const name=inputName.value;
    const email=inputEmail.value;
    const password=inputPassword.value;
    const confirmpassword=inputConfirmPassword.value;

    const accessToken=generateRandomToken();

    localStorage.setItem("name",name);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    localStorage.setItem("confirmpassword", confirmpassword);
    localStorage.setItem("accesstoken", accessToken);

    window.location.href = './profile/index.html';

    inputName.value='';
    inputEmail.value='';
    inputPassword.value='';
    inputConfirmPassword.value='';


});