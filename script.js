const realEstate = document.querySelector(".real-estate");
const menulogo = document.querySelector(".menu-logo");
const Xmark = document.querySelector(".x-mark");
const mobile = document.querySelector(".header-mobile");

const form = document.querySelector(".buying-form");

const Xlogo = document.querySelector(".x-mark-logo");

menulogo.addEventListener("click", () => {
  mobile.style.display = "block";
  menulogo.style.display = "none";
});

Xmark.addEventListener("click", () => {
  mobile.style.display = "none";
  menulogo.style.display = "block";
});

function closemenu() {
  mobile.style.display = "none";
  menulogo.style.display = "block";
}

document
  .querySelector(".form-button button")
  .addEventListener("click", function () {
    const form = document.querySelector(".inquiry-from2");
    const firstName = form
      .querySelector('input[name="firstname"]')
      .value.trim();
    const lastName = form.querySelector('input[name="lastname"]').value.trim();
    const email = form.querySelector('input[name="emailaddress"]').value.trim();
    const zip = form.querySelector('input[name="zipcode"]').value.trim();
    const selects = form.querySelectorAll("select");
    const checkbox = document.getElementById("Agreement");

    const nameRegex = /^[A-Za-z\s]+$/;
    const emailValid = email.includes("@gmail.com");
    const allSelectsFilled = Array.from(selects).every(
      (select) => select.value !== ""
    );
    const allInputsFilled = firstName && lastName && email && zip;
    const nameValid = nameRegex.test(firstName) && nameRegex.test(lastName);

    if (
      allInputsFilled &&
      allSelectsFilled &&
      emailValid &&
      nameValid &&
      checkbox.checked
    ) {
      alert("Form submitted successfully");

      form
        .querySelectorAll('input[type="text"], input[type="email"]')
        .forEach((input) => (input.value = ""));
      form.querySelectorAll("select").forEach((select) => (select.value = ""));
      checkbox.checked = false;
    } else {
      alert("Please fill out all fields correctly");
    }
  });

document.getElementById("submitBtn").addEventListener("click", function () {
  const email = document.getElementById("emailInput").value.trim();

  if (email.includes("@gmail.com")) {
    alert("Form submitted successfully");
    document.getElementById("emailInput").value = "";
  } else {
    alert("Please enter a valid email");
  }
});

function toggleExtraButtons() {
  const extraDiv = document.getElementById("extraButtons");
  // Toggle visibility
  if (extraDiv.style.display === "none" || extraDiv.style.display === "") {
    extraDiv.style.display = "flex";
  } else {
    extraDiv.style.display = "none";
  }
}

function buybtn() {
  realEstate.style.display = "none";
  form.style.display = "flex";
}

Xlogo.addEventListener("click", function () {
  realEstate.style.display = "block";
  form.style.display = "none";
});





function validateForm() {
  const fullName = document.getElementById("fullName").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const propertyType = document.getElementById("propertyType").value;
  const location = document.getElementById("location").value;
  const purpose = document.getElementById("purpose").value;

  const nameRegex = /^[A-Za-z\s]+$/;
  const phoneRegex = /^[0-9]+$/;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

  if (!fullName) {
    alert("Please fill out Full Name.");
    return;
  }
  if (!nameRegex.test(fullName)) {
    alert("Full Name should only contain letters.");
    return;
  }

  if (!email) {
    alert("Please fill out Email Address.");
    return;
  }
  if (!emailRegex.test(email)) {
    alert("Email must end with '@gmail.com'.");
    return;
  }

  if (!phone) {
    alert("Please fill out Phone Number.");
    return;
  }
  if (!phoneRegex.test(phone)) {
    alert("Phone Number should only contain digits.");
    return;
  }

  if (!propertyType || !location || !purpose) {
    alert("Please fill out all fields.");
    return;
  }

  alert("Thank you for your interest");
  document.querySelector(".buying-form").reset(); // Reset form after successful submit
}
