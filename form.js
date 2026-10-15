const form = document.getElementById("myForm");
const message = document.getElementById("message");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const fields = [
        { id: "name", error: "nameError", message: "Fill the Name" },
        { id: "email", error: "emailError", message: "Fill the Email" },
        { id: "password", error: "passwordError", message: "Fill the Password" },
        { id: "age", error: "ageError", message: "Fill the Age" },
        { id: "gender", error: "genderError", message: "Please select Gender" }
    ];

    message.textContent = "";

    let isValid = true;

    for (const field of fields) {
        const input = document.getElementById(field.id);
        const error = document.getElementById(field.error);
        error.textContent = "";
        input.style.border = "";

        if (input.value.trim() === "") {
            error.textContent = field.message;
            error.style.color = "red";
            input.style.border = "2px solid red";

            isValid = false;
        }
    }

    if (!isValid) {
        return;
    }

    message.textContent = "Form submitted successfully!";
    message.style.color = "green";
});

