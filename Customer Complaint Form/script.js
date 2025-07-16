const validateEmail = function (email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

const validateOrderNum = function (orderNum) {
  return /^2024\d{6}$/.test(orderNum);
};

const validateProductCode = function (code) {
  return /[A-Za-z]{2}\d{2}-[A-Za-z]\d{3}-[A-Za-z]{2}\d/.test(code);
};

const validateQuantity = function (quantity) {
  return Number(quantity) > 0;
};

const getComplaints = function () {
  const complaints = document.querySelectorAll(
    "#complaints-group input[type='checkbox']:checked"
  );
  return complaints.length > 0;
};

const validateComplaintDescription = function () {
  const otherChecked = document.querySelector(
    "#complaints-group input[value='other']:checked"
  );

  const description = document
    .querySelector("#complaint-description")
    .value.trim();
  return !otherChecked || (otherChecked && description.length >= 20);
};

const getSolution = function () {
  const solution = document.querySelectorAll(
    "#solutions-group input[type='radio']:checked"
  );
  return solution.length > 0;
};
const validateSolutionDescription = function () {
  const otherChecked = document.querySelector(
    "#solutions-group input[value='other']:checked"
  );
  const description = document
    .querySelector("#solution-description")
    .value.trim();
  return !otherChecked || (otherChecked && description.length >= 20);
};
const validateForm = function () {
  return {
    "full-name": document.getElementById("full-name").value.trim() !== "",
    email: validateEmail(document.getElementById("email").value.trim()),
    "order-no": validateOrderNum(
      document.getElementById("order-no").value.trim()
    ),
    "product-code": validateProductCode(
      document.getElementById("product-code").value.trim()
    ),
    quantity: validateQuantity(
      document.getElementById("quantity").value.trim()
    ),
    "complaints-group": getComplaints(),
    "complaint-description": validateComplaintDescription(),
    "solutions-group": getSolution(),
    "solution-description": validateSolutionDescription(),
  };
};

const isValid = function (formObj) {
  return Object.values(formObj).every((value) => value === true);
};

const highlightField = function (field, valid) {
  field.style.borderColor = valid ? "green" : "red";
};

document.getElementById("full-name").addEventListener("change", function () {
  highlightField(this, this.value.trim() !== "");
});
document.getElementById("email").addEventListener("change", function () {
  highlightField(
    this,
    validateEmail(document.getElementById("email").value.trim())
  );
});
document.getElementById("order-no").addEventListener("change", function () {
  highlightField(
    this,
    validateOrderNum(document.getElementById("order-no").value.trim())
  );
});
document.getElementById("product-code").addEventListener("change", function () {
  highlightField(
    this,
    validateProductCode(document.getElementById("product-code").value.trim())
  );
});

document.getElementById("quantity").addEventListener("change", function () {
  highlightField(
    this,
    validateQuantity(document.getElementById("quantity").value.trim())
  );
});

document
  .getElementById("complaints-group")
  .addEventListener("change", function () {
    highlightField(this, getComplaints());
  });

document
  .getElementById("complaint-description")
  .addEventListener("change", function () {
    highlightField(this, validateComplaintDescription());
  });

document
  .getElementById("solutions-group")
  .addEventListener("change", function () {
    highlightField(this, getSolution());
  });

document
  .getElementById("solution-description")
  .addEventListener("input", function () {
    highlightField(this, validateSolutionDescription());
  });

document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault();
  const validForm = validateForm();
  if (isValid(validForm)) {
    console.log("Form is valid!");
  } else {
    console.log("Form is invalid!");
  }
});
