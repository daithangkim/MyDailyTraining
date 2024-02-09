import { User, userDataBase } from "./userDataBase.js"

const loginButton = document.getElementById("loginButton")
const signInButton = document.getElementById("signInButton")
const signInButton2 = document.getElementById("signInButton2")


function authenticateAccess(email, password) {
    return userDataBase.find((user) => email === user.email && password === user.password) ?
        window.location.href = "app.html" : alert("Wrong password or unknown user")
}

//if login button is clicked input email and password are checked whether allowed to enter app or not
loginButton.onclick = () => {
    console.log(userDataBase)
    const emailValue = document.getElementById("email").value;
    const passwordValue = document.getElementById("password").value;
    authenticateAccess(emailValue, passwordValue)
}

signInButton.onclick = () => {
    //enable signIn-display and disable login-display for registration required data
    document.querySelector('.login').style.display = 'none'
    document.querySelector('.signIn').style.display = 'block'
}

//create a new user in the database and check whether the  confirmed password matches
signInButton2.addEventListener('click', function() {
    // Read the user registration inputs
    const nameValue = document.getElementById("SignInName").value
    const ageValue = document.getElementById("SignInAge").value
    const addressValue = document.getElementById("SignInAddress").value
    const emailValue = document.getElementById("SignInEmail").value
    const passwordValue = document.getElementById("SignInPassword").value
    const confirmedPassWordValue = document.getElementById("confirmPassword").value

    // Validate password match
    if (passwordValue !== confirmedPassWordValue) {
        alert("Passwords do not match!")
        return
    }

    // Store user data
    userDataBase.push(new User(nameValue, emailValue, passwordValue, ageValue, addressValue))
    console.log(userDataBase)

    //enter the app with welcome greetings
    window.location.href = "app.html"
});


const mockEmail = 'email';
const mockPassword = 'password';
const mockEmail2 = 'email2';
const mockPassword2 = 'password2';

userDataBase.push(new User("Dai-Thang", mockEmail, mockPassword, 1, 'TUM'))
userDataBase.push(new User("Thomas", mockEmail2, mockPassword2, 1, 'LMU'))
console.log(userDataBase)


