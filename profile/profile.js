
const profileContainer = document.getElementById("profileContainer");
const logoutbtn = document.getElementById("logoutbtn");

/* <div id="profileInfo">
<p>Full Name:Your Name</p>
<p>Email:Your Email</p>
<p>Token:Your Token</p>
<p>Password:Your password</p>
</div> */

//retrived stored email, password, name, etc;
const storedname = localStorage.getItem("name");
const storedemail = localStorage.getItem("email");
const storedpassword = localStorage.getItem('password');
const storedtoken = localStorage.getItem("accesstoken");
const pcontainer = document.getElementById('profileInfo');
// pcontainer.id="profileInfo";

const p1 = document.createElement("p");
p1.textContent = "Full Name:" + storedname;

const p2 = document.createElement("p");
p2.textContent = "Email:" + storedemail;

const p3 = document.createElement("p");
p3.textContent = "Token:" + storedtoken;

const p4 = document.createElement("p");
p4.textContent = "Password:" + storedpassword;

pcontainer.appendChild(p1);
pcontainer.appendChild(p2);
pcontainer.appendChild(p3);
pcontainer.appendChild(p4);

// profileContainer.append(pcontainer);

logoutbtn.addEventListener('click', () => {
    localStorage.removeItem("name");
    localStorage.removeItem("email");
    localStorage.removeItem("accesstoken");
    localStorage.removeItem("password");
    
     window.location.href='../index.html';

});