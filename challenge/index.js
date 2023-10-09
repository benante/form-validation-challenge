const form = document.querySelector("form");
const formFields = document.querySelectorAll("input");

form.setAttribute("novalidate", "");

formFields.forEach((field) => {
  field.setAttribute("aria-invalid", "false");

  field.addEventListener("invalid", () => {
    field.setAttribute("aria-invalid", "true");
  });
});

form.addEventListener("submit", (event) => {
  const allValid = form.checkValidity();
  if (!allValid) {
    event.preventDefault();
  }
});
