// profile pop up
document.addEventListener("DOMContentLoaded", function () {
    const profileNav = document.querySelector('.navbar img[alt=""]');
    const profilePopup = document.getElementById("profile-popup");
    
    console.log(profilePopup)
    
    profileNav.addEventListener("click", function () {
        if (profileNav.classList.contains("active")) {
        profilePopup.style.display = "none";
        profileNav.classList.remove("active");
        } else {
        profileNav.classList.add("active");
        profilePopup.style.display = "flex";
        }
    });
    
    profilePopup.addEventListener("click", function (event) {
        if (event.target === profilePopup) {
        profilePopup.style.display = "none";
        }
    });
    });
    
    function showPrivacyPolicy() {
    alert(
        "Privacy Policy: Your privacy is important to us. We do not share your data."
    );
    }
    
    function showTermsConditions() {
    alert(
        "Terms and Conditions: By using this site, you agree to our terms and conditions."
    );
    }
    
    function logout() {
    // Logic for logging out
    alert("You have been logged out.");
    // Redirect to the login page or homepage
    window.location.href = "../loginPage/login.html";
    }