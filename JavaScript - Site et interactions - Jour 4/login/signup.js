let form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let errorContainer = document.querySelector(".message-error");
  let errorList = document.querySelector(".message-error ul");

  errorList.innerHTML = "";
  errorContainer.classList.remove("visible");

  let email = document.querySelector("#email");
  if (email.value === "") {
    errorContainer.classList.add("visible");
    email.classList.remove("success");

    let err = document.createElement("li");
    err.innerText = "Email must be valid";

    errorList.appendChild(err);
  } else {
    email.classList.add("success");
  }

  let pseudo = document.querySelector("#pseudo");
  if (pseudo.value.length < 6) {
    errorContainer.classList.add("visible");
    pseudo.classList.remove("success");

    let err = document.createElement("li");
    err.innerText = "Password needs to have at least one uppercase letter, one lowercase letter and one special number";

    errorList.appendChild(err);
  } else {
    pseudo.classList.add("success");
  }

  let passCheck = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[-+_!@#$%^&*.,?]).+$"
  );

  let password = document.querySelector("#password");
  if (password.value.length < 10 || passCheck.test(password.value) === false) {
    errorContainer.classList.add("visible");
    password.classList.remove("success");

    let err = document.createElement("li");
    err.innerText =
      "Password needs to have ";

    errorList.appendChild(err);
  } else {
    password.classList.add("success");
  }

  let passwordConfirm = document.querySelector("#password2");
  if (password.value !== "") {
    if (password.value !== passwordConfirm.value) {
      errorContainer.classList.add("visible");
      passwordConfirm.classList.remove("success");

      let err = document.createElement("li");
      err.innerText = "Passwords need to be the same";

      errorList.appendChild(err);
    } else {
      passwordConfirm.classList.add("success");
    }
  }

  let successContainer = document.querySelector('.message-success')
  successContainer.classList.remove('visible')

  if (
    email.classList.contains('success') && 
    pseudo.classList.contains('success') && 
    password.classList.contains('success') && 
    passwordConfirm.classList.contains('success')
  ) {
    successContainer.classList.add('visible')
  }
});