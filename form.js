
const form = document.getElementById("myForm");
const message = document.getElementById("message");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const fields = [
        { id: "name", error: "nameError", message: "Fill the Name" },
        { id: "email", error: "emailError", message: "Fill the Email" },
        { id: "password", error: "passwordError", message: "Fill the Password" },
        { id: "conf-password", error: "confPasswordError", message: "Confirm the Password" },
        { id: "age", error: "ageError", message: "Fill the Age" },
        { id: "gender", error: "genderError", message: "Please select Gender" }
    ];

    message.textContent = "";

    let isValid = true;
    let firstInvalid = null;

    // Clear previous errors
    for (const field of fields) {
        document.getElementById(field.error).textContent = "";
        document.getElementById(field.id).style.border = "";
    }

    // Check empty fields
    for (const field of fields) {
        const input = document.getElementById(field.id);
        const error = document.getElementById(field.error);

        if (input.value.trim() === "") {
            error.textContent = field.message;
            error.style.color = "red";
            input.style.border = "2px solid red";

            if (firstInvalid === null) {
                firstInvalid = input;
            }

            isValid = false;
        }
    }

    if (!isValid) {
        firstInvalid.focus();
        return;
    }

    const password = document.getElementById("password").value;
    const conf_Password = document.getElementById("conf-password");
    const mes = document.getElementById("confPasswordError");

    if (password !== conf_Password.value) {
        mes.textContent = "password not matched";
        mes.style.color = "red";

        confirmPassword.style.border = "2px solid red";
        confirmPassword.focus();
        return;
    }

    message.textContent = "Registration successful!";
    message.style.color = "green";
});
