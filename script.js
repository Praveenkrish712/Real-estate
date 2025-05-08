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
  const form = document.querySelector('.inquiry-from2');
  const firstName = form.querySelector('input[name="firstname"]').value.trim();
  const lastName = form.querySelector('input[name="lastname"]').value.trim();
  const email = form.querySelector('input[name="emailaddress"]').value.trim();
  const zip = form.querySelector('input[name="zipcode"]').value.trim();
  const selects = form.querySelectorAll('select');
  const checkbox = document.getElementById('Agreement');

  const nameRegex = /^[A-Za-z\s]+$/;
  const emailValid = email.includes('@');
  const allSelectsFilled = Array.from(selects).every(select => select.value !== '');
  const allInputsFilled = firstName && lastName && email && zip;
  const nameValid = nameRegex.test(firstName) && nameRegex.test(lastName);

  if (allInputsFilled && allSelectsFilled && emailValid && nameValid && checkbox.checked) {
    alert("Form submitted successfully");

    // Optional: clear form after submission
    form.querySelectorAll('input[type="text"], input[type="email"]').forEach(input => input.value = '');
    form.querySelectorAll('select').forEach(select => select.value = '');
    checkbox.checked = false;
  } else {
    alert("Please fill out all fields correctly");
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
