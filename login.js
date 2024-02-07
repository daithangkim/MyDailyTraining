const loginButton = document.getElementById("loginButton")
const signInButton = document.getElementById("signInButton")
var isLoggedIn

class User {
    constructor(email, password, age, address) {
        this.diaryList = [];
        this.email = email;
        this.password = password;
        this.age = age;
        this.address = address;
    }
}

var dataBase = [User]

function authenticateAccess(email, password) {
    return dataBase.find((user) => email === user.email && password === user.password) ?
        window.location.href = "app.html" : alert("Wrong password or unknown user")
}

//if login button is clicked input email and password are checked whether allowed to enter app or not
loginButton.onclick = () => {
    const emailValue = document.getElementById("email").value;
    const passwordValue = document.getElementById("password").value;
    authenticateAccess(emailValue, passwordValue)
}

signInButton.onclick = () => {
    loginButton.remove()
    signInButton.remove()

    const signInButton2 = document.createElement('input')
    signInButton2.type="submit"
    signInButton2.value="Sign in"
    document.querySelector('.login').appendChild(signInButton2)
}

const mockEmail = 'ge65nay@mytum.de';
const mockPassword = 'password';
dataBase.push(new User(mockEmail, mockPassword, 1, 'TUM'))