function togglePaymentField() {
  var paymentTypeSelect = document.getElementById("PaymentType");
  var paymentField = document.getElementById("paymentField");
  var formNote = document.getElementById("formNote");

  if (paymentTypeSelect.value === "yes") {
      paymentField.style.display = "block";
      formNote.textContent = "The shipping cost will be $$$.";
  } else if (paymentTypeSelect.value === "no") {
      paymentField.style.display = "block";
      formNote.textContent = "The shipping cost will be $$$$$.";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const intro = document.querySelector(".intro");

  setTimeout(() => {
      intro.classList.add("fade-out");
  }, 3000); // Fade out after 3 seconds
});
