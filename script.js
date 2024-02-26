const subButton = document.querySelector(".subButton");
let email;
let confirmedEmail = document.querySelector(".confirmedEmail").innerText;
const dismiss = document.querySelector(".dismiss");

function capture() {
  const emailInput = document.querySelector("input").value;
  if (emailInput === "") {
    alert("Please enter your email address");
  } else {
    document.querySelector(".confirmedEmail").innerText = emailInput;
    console.log(emailInput);
    document.querySelector(".signup").style.display = "none";
    document.querySelector(".success").style.display = "block";
  }
}

subButton.addEventListener("click", capture);

dismiss.addEventListener("click", function (event) {
  document.querySelector(".signup").style.display = "block";
  document.querySelector(".success").style.display = "none";
  document.querySelector("input").value = "";
});
