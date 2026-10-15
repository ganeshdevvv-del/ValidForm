const form = document.getElementById("myForm");
const message = document.getElementById("message");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    // field array.............
    const fields = [
        { id: "name", error: "nameError", message: "fill THE Name" },
        { id: "email", error: "emailError", message: "fill the Email" },
        { id: "password", error: "passwordError", message: "fill the Password" },
        { id: "age", error: "ageError", message: "fill the Age" },
        { id: "gender", error: "genderError", message: "Please select Gender" }
    ];
    //loop the array function....
  

    message.textContent = "";

    for (const field of fields) {
        const input = document.getElementById(field.id);

        if (input.value.trim() === "") {
            const error = document.getElementById(field.error);

            error.textContent = field.message;
            error.style.color = "red";

            input.focus();
            return;
        }
    }

    message.textContent = "Form submitted successfully!";
    message.style.color = "green";
}
);