var Login = /** @class */ (function () {
    function Login() {
    }
    Login.prototype.login = function () {
        var usernameInput = document.getElementById('username');
        var passwordInput = document.getElementById('password');
        var username = usernameInput.value;
        var password = passwordInput.value;
        username = usernameInput.value;
        password = passwordInput.value;
        if (username === 'lphan' && password === 'lphan123') {
            this.goToHome();
        }
        else {
            this.displayError();
        }
    };
    Login.prototype.displayError = function () {
        var errorBox = document.getElementById('errorBox');
        errorBox.innerHTML = 'User Not Found';
        errorBox.style = "display:block";
        var interval = setInterval(function () {
            errorBox.style = "display:none";
            clearInterval(interval);
        }, 5000);
    };
    Login.prototype.goToHome = function () {
        window.location.href = 'index.html';
    };
    return Login;
}());
var login = new Login();
