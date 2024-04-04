document.getElementById("myForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Stop the form from submitting normally

  // Gather the form data
  var formData = new FormData(this);

  fetch("https://formsubmit.co/ajax/damianmroczek@yahoo.com", {
    method: "POST",
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      alert("Form submitted successfully!");
      window.location.reload(); // Reload the page
      this.reset(); // Reset the form fields
    })
    .catch((error) => {
      console.error(error);
      alert("There was a problem with your submission. Please try again.");
    });
});
