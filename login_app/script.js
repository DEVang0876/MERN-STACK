function handleSignup() 
{

    const name = document.getElementById("fullname").value;
    const email = document.getElementById("email").value;
    const mobile = document.getElementById("mobile").value;
    const address = document.getElementById("address").value;
    const gender = document.querySelector('input[name="gender"]:checked')?.value || "";
    const username = document.getElementById("username").value;
    const password = document.getElementById("createPassword").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) 
    {
        alert("Passwords do not match!");
        return;
    }

    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("mobile", mobile);
    localStorage.setItem("address", address);
    localStorage.setItem("gender", gender);
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    alert("Account created! Please login.");
    window.location.href = "index.html";
}

function handleLogin() 
{
    const username = document.getElementById("loginUsername").value;
    const password = document.getElementById("loginPassword").value;

    if (
        username === localStorage.getItem("username") &&
        password === localStorage.getItem("password")
    ) {
        localStorage.setItem("isLoggedIn", "true");
        window.location.href = "home.html";
    } else {
        alert("Invalid username or password");
    }
}

function handleForgotPassword() 
{
    const username = document.getElementById("forgotUsername").value;
    const newPassword = document.getElementById("newPassword").value;
    const confirmNewPassword = document.getElementById("confirmNewPassword").value;

    if (newPassword !== confirmNewPassword) 
        {
        alert("Passwords do not match");
        return;
    }

    if (username === localStorage.getItem("username")) 
        {
        localStorage.setItem("password", newPassword);
        alert("Password successfully updated!");
        window.location.href = "index.html";
    } 
    else 
    {
        alert("Username not found!");
    }
}

function displayUserInfo() 
{
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn !== "true") 
    {
        alert("You must login first.");
        window.location.href = "index.html";
        return;
    }

    document.getElementById("displayName").textContent = localStorage.getItem("name") || "";
    document.getElementById("displayEmail").textContent = localStorage.getItem("email") || "";
    document.getElementById("displayMobile").textContent = localStorage.getItem("mobile") || "";
    document.getElementById("displayAddress").textContent = localStorage.getItem("address") || "";
    document.getElementById("displayGender").textContent = localStorage.getItem("gender") || "";
    document.getElementById("displayUsername").textContent = localStorage.getItem("username") || "";
}

function handleLogout() 
{
    localStorage.setItem("isLoggedIn", "false");
    window.location.href = "index.html";
}

if (window.location.pathname.endsWith("home.html")) 
{
    window.onload = displayUserInfo;
}
