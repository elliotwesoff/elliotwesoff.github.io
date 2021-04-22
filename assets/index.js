document.addEventListener('DOMContentLoaded', function () {
  var phone = () => [["+1", "(626)", "272"].join(" "), "7059"].join("-"); // man am i paranoid or what?
  var email = () => ["elliot", ".", "wesoff", "@", "gmail", ".com"].join("");
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
