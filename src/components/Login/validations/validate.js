// If you haven't entered anything in the input fields, useRef's current.value will be an empty string ("").
// That's why, when you pass ref.current.value to this function, email and password will be "" if the fields are empty.
// You can check this by logging the values before validation.

export const validateEmailAndpassword = (email, password) => {
    // If both fields are empty
    if (email === '' && password === '') return "Email and password are required fields";
    // If only email is empty
    if (email === '') return "Email is required";
    // If only password is empty
    if (password === '') return "Password is required";

    // Validate email format
    const isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    if (!isValidEmail) {
        return "Invalid email format";
    }

    // Validate password format (at least 8 characters, at least one letter and one number)
    const isValidPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password);
    if (!isValidPassword) {
        return "Password must be at least 8 characters and contain at least one letter and one number";
    }

    // If all validations pass
    return null;
}
