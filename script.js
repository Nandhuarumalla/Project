function calculateAge() {
  var birthdate = document.getElementById("birthdate").value;
  var result = document.getElementById("result");

  if (birthdate === "") {
    result.textContent = "Please select your birthdate.";
    return;
  }

  var birthDateObj = new Date(birthdate);
  var today = new Date();

  var age = today.getFullYear() - birthDateObj.getFullYear();
  var monthDifference = today.getMonth() - birthDateObj.getMonth();

  // Adjust if the birthdate hasn’t occurred this year yet
  if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDateObj.getDate())) {
    age--;
  }

  result.textContent = "Your age is " + age + " years.";
}