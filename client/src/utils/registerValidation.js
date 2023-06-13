const registerValidation = (values) => {
    let error = {}

    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const password_pattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;


    if (values.firstName === "") {
        error.firstName = "First name should not be empty"
    } else {
        error.firstName = ""
    }

    if (values.email === "") {
        error.email = "Email should not be empty"
    } else if (!email_pattern.test(values.email)) {
        error.email = "Provide a valid email"
    } else {
        error.email = ""
    }

    if (values.password === "") {
        error.password = "Password should not be empty"
    } else if (!password_pattern.test(values.password)) {
        error.password = "Password must contain a special character, must be of minimium 8 characters, an uppercase, lowercase and a number"
    } else {
        error.password = ""
    } return error;

}

export default registerValidation;