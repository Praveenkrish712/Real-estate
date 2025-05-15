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



 document.querySelector(".form-button button").addEventListener("click", function (e) {
    e.preventDefault();

    const inquirySelect = document.getElementById("inquirySelect").value.trim();
    const inquiryInfo = document.getElementById("inquiryInfo").value.trim();
    const firstName = document.getElementById("inquiryFirstname").value.trim();
    const lastName = document.getElementById("inquiryLastname").value.trim();
    const email = document.getElementById("inquiryEmail").value.trim();
    const location = document.getElementById("inquiryLocation").value.trim();
    const zip = document.getElementById("inquiryZipcode").value.trim();
    const property = document.getElementById("inquiryProperty").value.trim();
    const checkbox = document.getElementById("inquiryCheckbox").checked;

    const nameRegex = /^[A-Za-z]+$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    const zipRegex = /^\d{6}$/;

    if (inquirySelect === "") {
      alert("Please select an inquiry type.");
      return;
    }

    if (inquiryInfo === "") {
      alert("Please select who you are.");
      return;
    }

    if (!nameRegex.test(firstName)) {
      alert("First name must contain only letters.");
      return;
    }

    if (!nameRegex.test(lastName)) {
      alert("Last name must contain only letters.");
      return;
    }

    if (!emailRegex.test(email)) {
      alert("Please enter a valid Gmail address (must end with @gmail.com).");
      return;
    }

    if (location === "") {
      alert("Please select a location.");
      return;
    }

    if (!zipRegex.test(zip)) {
      alert("Zip code must be exactly 6 digits.");
      return;
    }

    if (property === "") {
      alert("Please select a property type.");
      return;
    }

    if (!checkbox) {
      alert("You must agree to the GDPR terms.");
      return;
    }

    alert("Form submitted successfully!");

    // Reset form
    document.getElementById("inquirySelect").value = "";
    document.getElementById("inquiryInfo").value = "";
    document.getElementById("inquiryFirstname").value = "";
    document.getElementById("inquiryLastname").value = "";
    document.getElementById("inquiryEmail").value = "";
    document.getElementById("inquiryLocation").value = "";
    document.getElementById("inquiryZipcode").value = "";
    document.getElementById("inquiryProperty").value = "";
    document.getElementById("inquiryCheckbox").checked = false;
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
    const form = document.querySelector(".buying-form");
    const fullName = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const propertyType = document.getElementById("propertyType").value;
    const location = document.getElementById("location").value;
    const purpose = document.getElementById("purpose").value;
    const file = document.getElementById("file").files[0];

    const nameRegex = /^[A-Za-z\s]+$/;
    const phoneRegex = /^\d{10}$/;
    const emailRegex = /^[\w.-]+@gmail\.com$/i;

    if (!fullName || !nameRegex.test(fullName)) {
      alert("Please enter a valid full name (letters only).");
      return;
    }

    if (!email || !emailRegex.test(email)) {
      alert("Please enter a valid Gmail address (must end with @gmail.com).");
      return;
    }

    
    if (!phone || !phoneRegex.test(phone)) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }

    if (!propertyType) {
      alert("Please select a property type.");
      return;
    }

    if (!location) {
      alert("Please select a preferred location.");
      return;
    }

    if (!purpose) {
      alert("Please select the purpose of purchase.");
      return;
    }

    if (!file) {
      alert("Please upload a file.");
      return;
    }

    alert("Thank you for your interesting!");

    // Reset form after successful submission
    form.reset();
  }