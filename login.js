let loginbtn = document.getElementById('loginbtn');
let signupbtn = document.getElementById('signupbtn');
let confirm = document.getElementById('confirm');
let Already = document.getElementById('Already');

loginbtn.onclick = function(){
  if (loginbtn.innerText =="log In") {
    confirm.style.display = "none";
    Already.innerText = "Don't have an account?"; 
    signupbtn.innerText = "Sign In";
    loginbtn.innerText ="Sign Up";
  } else {
    confirm.style.display = "block";
    Already.innerText = "Already have an account?"; 
    signupbtn.innerText = "Sign Up";
    loginbtn.innerText ="log In"; 
  }
}