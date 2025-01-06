document.addEventListener("DOMContentLoaded", function () {
    document
      .getElementById("appointmentForm")
      .addEventListener("submit", function (event) {
        event.preventDefault();
  
        var form = event.target;
        var formData = new FormData(form);
  
        // Client-side validation
        var requiredFields = ["name", "email", "phone", "appointment-date", "msg"];
        var allFieldsValid = true;
  
        requiredFields.forEach(function (fieldName) {
            var field = document.getElementById(fieldName);
            if (field && field.value.trim() === "") {
                allFieldsValid = false;
                field.classList.add("is-invalid"); // Add error styling
                document.getElementById("alertMessage").innerText = `Please fill the ${fieldName} field.`;
                document.getElementById("alertMessage").style.display = "block";
            } else if (field) {
                field.classList.remove("is-invalid"); // Remove error styling
            }
        });
        
  
        if (!allFieldsValid) {
          return; // Stop the submission if validation fails
        }
  
        // Show sending message
        document.getElementById("alertMessage").innerText = "Sending Message...";
        document.getElementById("alertMessage").style.display = "block";
  
        fetch(form.action, { method: "POST", body: formData })
          .then((response) => {
            if (response.ok) {
              document.getElementById("alertMessage").innerText =
                "Message Sent Successfully!";
              setTimeout(function () {
                form.reset();
                document.getElementById("alertMessage").innerText =
                  "Your Message is Pending For Review.";
              }, 4000);
            } else {
              document.getElementById("alertMessage").innerText =
                "Failed to send the message.";
            }
          })
          .catch((error) => {
            console.error("Error:", error);
            document.getElementById("alertMessage").innerText =
              "Something Went Wrong: " + error;
          });
      });
  });
