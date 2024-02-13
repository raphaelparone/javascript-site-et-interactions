let form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let errorContainer = document.querySelector(".message-error");
  let errorList = document.querySelector(".message-error ul");

  errorList.innerHTML = "";
  errorContainer.classList.remove("visible");

  let cardToTrade = document.querySelector("#cardToTrade");
  if (cardToTrade.value === "") {
    errorContainer.classList.add("visible");
    cardToTrade.classList.remove("success");

    let err = document.createElement("li");
    err.innerText = "Card to Trade must be valid";

    errorList.appendChild(err);
  } else {
    cardToTrade.classList.add("success");
  }

  let pseudo = document.querySelector("#pseudo");
  if (pseudo.value.length < 6) {
    errorContainer.classList.add("visible");
    pseudo.classList.remove("success");

    let err = document.createElement("li");
    err.innerText = "Wrong password";

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
    err.innerText = "";

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

  let successContainer = document.querySelector(".message-success");
  successContainer.classList.remove("visible");

  if (
    cardToTrade.classList.contains("success") &&
    pseudo.classList.contains("success") &&
    password.classList.contains("success") &&
    passwordConfirm.classList.contains("success")
  ) {
    successContainer.classList.add("visible");
  }
});
