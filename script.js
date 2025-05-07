const menulogo=document.querySelector(".menu-logo");
const Xmark=document.querySelector(".x-mark");
const mobile=document.querySelector(".header-mobile");


menulogo.addEventListener("click",()=>{
  mobile.style.display="block";
  menulogo.style.display="none"
})

Xmark.addEventListener("click",()=>{
  mobile.style.display="none";
  menulogo.style.display="block";
})

function closemenu() {
  mobile.style.display="none";
  menulogo.style.display="block";
}



  document.querySelector('.form-button button').addEventListener('click', function () {
    const requiredInputs = [
      ...document.querySelectorAll('.inquiry-from2 input[type="text"]'),
      ...document.querySelectorAll('.inquiry-from2 select')
    ];

    const isAgreementChecked = document.getElementById('Agreement').checked;

    let allFilled = requiredInputs.every(input => input.value.trim() !== '');

    if (!allFilled || !isAgreementChecked) {
      alert("Please fill out all fields");
    } else {
      alert("Form submitted successfully");


      requiredInputs.forEach(input => input.value = '');
      document.getElementById('Agreement').checked = false;
    }
  });




  document.getElementById('submitBtn').addEventListener('click', function () {
    const email = document.getElementById('emailInput').value.trim();

    if (email === "") {
      alert("Please enter your email");
    } else {
      alert("Submitted successfully");
      document.getElementById('emailInput').value = "";
    }
  });
