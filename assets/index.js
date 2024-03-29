document.addEventListener('DOMContentLoaded', function () {
  var phone = () => [["+1", "626", "650"].join(" "), "8059"].join(" ");
  var email = () => ["me", "@", "ell10t", ".io"].join("");
  var phoneElement = document.getElementById("phone");
  var emailElement = document.getElementById("email");
  phoneElement.addEventListener('click', function () {
    this.innerText = phone();
    phoneElement.setAttribute('class', 'clicked');
  });
  emailElement.addEventListener('click', function () {
    this.innerText = email();
    emailElement.setAttribute('class', 'clicked');
  });
  window.onbeforeprint = () => {
    phoneElement.click();
    emailElement.click();
  }
});
