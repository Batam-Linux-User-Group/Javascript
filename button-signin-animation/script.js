const btnSignin = document.querySelector(".btnSignin");

btnSignin.addEventListener(
  "click",
  function () {
    btnSignin.innerHTML = "Signing In";
    btnSignin.classList.add("spinning");

    setTimeout(function () {
      btnSignin.classList.remove("spinning");
      btnSignin.innerHTML = "Sign In";
    }, 3000);
  },
  false
);
