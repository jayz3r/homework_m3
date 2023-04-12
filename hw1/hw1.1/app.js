const email = document.querySelector("#Email");
const emailField = document.querySelector('.emailField')
const password = document.querySelector("#Password");
const passwordField = document.querySelector('.passField')
const password2 = document.querySelector("#Password2");
const password2Field = document.querySelector('.pass2Field')
const Check = document.querySelector(".Check");
// const emailMsg = document.querySelector("#emailMsg");
// const passwordMsg = document.querySelector("#passwordMsg");
// const password2Msg = document.querySelector("#password2Msg");
const message = document.querySelector("#message");
const emailRegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const passwordRegExp = /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}/g;

function emailCheck(){
  if (!emailRegExp.test(email.value)) {
    return emailField.classList.add('invalid')
  } else {
    emailField.classList.add('success')
    emailField.classList.remove('invalid')
  }

};

function passwordCheck() {
  if (!password.value.match(passwordRegExp)) {
    return passwordField.classList.add('invalid')
  } else {
    passwordField.classList.add('success')
    passwordField.classList.remove('invalid')
  }
}
function confirmPassword (){
  if(password.value !== password2.value || password2.value === ''){
    password2Field.classList.add('invalid')
  } else{
    password2Field.classList.add('success')
    password2Field.classList.remove('invalid')
  }
}

Check.addEventListener("click", (e) => {
  e.preventDefault();
  emailCheck();
  passwordCheck();
  confirmPassword();
});

const showPasswordIcon = document.querySelector("#showPassword");
showPasswordIcon.onclick = () => {
  const icon = showPasswordIcon.children[0];
  icon.classList.toggle("fa-eye");
  icon.classList.toggle("fa-eye-slash");
  if (icon.classList.contains("fa-eye-slash")) {
    password.setAttribute("type", "text");
    password2.setAttribute("type", "text");
  } else {
    password.setAttribute("type", "password");
    password2.setAttribute("type", "password");
  }
};
