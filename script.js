// ==========================================
// THE DENTAL HUB - MAIN JAVASCRIPT
// ==========================================

// Check clinic data
console.log("Clinic loaded:", clinicData.name);


// ==========================================
// UPDATE CLINIC NAME
// ==========================================

document.querySelectorAll(".clinic-name").forEach(element => {
    element.textContent = clinicData.name;
});
// UPDATE HINDI CLINIC NAME
document.querySelectorAll(".clinic-hindi-name").forEach(element => {
    element.textContent = clinicData.hindiName;
});

// ==========================================
// UPDATE PHONE NUMBER
// ==========================================

document.querySelectorAll(".clinic-phone").forEach(element => {
    element.textContent = clinicData.phone;
});


// ==========================================
// UPDATE ADDRESS
// ==========================================

document.querySelectorAll(".clinic-address").forEach(element => {
    element.textContent = clinicData.address;
});
// UPDATE LOCATION CODE
document.querySelectorAll(".clinic-location-code").forEach(element => {
    element.textContent = clinicData.locationCode;
});
// UPDATE OPENING TIME
document.querySelectorAll(".clinic-opening-time").forEach(element => {
    element.textContent = clinicData.openingTime;
});  
// ==========================================
// UPDATE TAGLINE
// ==========================================

document.querySelectorAll(".clinic-tagline").forEach(element => {
    element.textContent = clinicData.tagline;
});


// ==========================================
// UPDATE DESCRIPTION
// ==========================================

document.querySelectorAll(".clinic-description").forEach(element => {
    element.textContent = clinicData.description;
});


// ==========================================
// PHONE LINKS
// ==========================================

document.querySelectorAll(".call-button").forEach(button => {

    button.href = "tel:" + clinicData.phoneLink;

});


// ==========================================
// WHATSAPP LINKS
// ==========================================

document.querySelectorAll(".whatsapp").forEach(button => {

    button.href =
        "https://wa.me/" + clinicData.whatsapp;

});


// ==========================================
// GOOGLE MAPS
// ==========================================

document.querySelectorAll(".map-btn").forEach(button => {

    button.href = clinicData.map;
    button.target = "_blank";

});


// ==========================================
// SMOOTH SCROLLING
// ==========================================

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(event) {

        const targetId = this.getAttribute("href");

        if (targetId === "#") {
            return;
        }

        const target = document.querySelector(targetId);

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


// ==========================================
// CURRENT YEAR
// ==========================================

document.querySelectorAll(".current-year").forEach(element => {

    element.textContent = new Date().getFullYear();

});


// ==========================================
// WEBSITE READY
// ==========================================

console.log("The Dental Hub website is ready.");
// MOBILE MENU
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}