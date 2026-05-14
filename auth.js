const signupForm = document.getElementById("signupForm");

if (signupForm) {

    signupForm.addEventListener("submit", (e) => {

        e.preventDefault();

        const name = document
            .getElementById("signupName")
            .value
            .trim();

        const email = document
            .getElementById("signupEmail")
            .value
            .trim();

        const password = document
            .getElementById("signupPassword")
            .value
            .trim();

        if (name === "" || email === "" || password === "") {

            alert("All Fields Required");

            return;

        }

        if (password.length < 6) {

            alert("Password Must Be 6+ Characters");

            return;

        }

        const existUser = users.find(user =>

            user.email === email

        );

        if (existUser) {

            alert("Email Already Exists");

            return;

        }

        users.push({

            id: Date.now(),
            name,
            email,
            password

        });

        localStorage.setItem(
            "users",
            JSON.stringify(users)
        );

        alert("Signup Successful");

        window.location.href = "login.html";

    });

}


const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", (e) => {

        e.preventDefault();

        const email = document
            .getElementById("loginEmail")
            .value
            .trim();

        const password = document
            .getElementById("loginPassword")
            .value
            .trim();

        const validUser = users.find(user =>

            user.email === email &&
            user.password === password

        );

        if (!validUser) {

            alert("Invalid Email Or Password");

            return;

        }

        localStorage.setItem(
            "currentUser",
            JSON.stringify(validUser)
        );

        alert("Login Successful");

        window.location.href = "index.html";

    });

}


function logout() {

    localStorage.removeItem("currentUser");

    window.location.href = "login.html";

}