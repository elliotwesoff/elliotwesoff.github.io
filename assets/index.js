document.addEventListener('DOMContentLoaded', function () {
  var phone = () => [["+1", "(626)", "650"].join(" "), "8059"].join(" ");
  var email = () => ["wesoffe", "@", "unlv.nevada", ".edu"].join("");
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
