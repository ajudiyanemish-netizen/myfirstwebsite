document.addEventListener("DOMContentLoaded", () => {

    // ================= NAVIGATION LINKS =================

    const navLinks = document.querySelectorAll("nav a");

    const homeLink = navLinks[0];
    const aboutLink = navLinks[1];
    const servicesLink = navLinks[2];
    const projectsLink = navLinks[3];
    const nemishAILink = navLinks[4];
    const galleryLink = navLinks[5];
    const contactLink = navLinks[6];


    // ================= NAVIGATION LISTENERS =================

    if (homeLink) {
        homeLink.addEventListener("click", (event) => {
            event.preventDefault();
            window.location.href = "index.html";
        });
    }

    if (aboutLink) {
        aboutLink.addEventListener("click", (event) => {
            event.preventDefault();
            window.location.href = "about.html";
        });
    }

    if (servicesLink) {
        servicesLink.addEventListener("click", (event) => {
            event.preventDefault();
            window.location.href = "services.html";
        });
    }

    if (projectsLink) {
        projectsLink.addEventListener("click", (event) => {
            event.preventDefault();
            window.location.href = "projects.html";
        });
    }

    if (nemishAILink) {
        nemishAILink.addEventListener("click", (event) => {
            event.preventDefault();
            window.location.href = "nemish-ai.html";
        });
    }

    if (galleryLink) {
        galleryLink.addEventListener("click", (event) => {
            event.preventDefault();
            window.location.href = "gallery.html";
        });
    }

    if (contactLink) {
        contactLink.addEventListener("click", (event) => {
            event.preventDefault();
            window.location.href = "contact.html";
        });
    }


    // ================= GET A QUOTE BUTTONS =================

    const allButtons = document.querySelectorAll("button");

    const headerQuoteButton = allButtons[0];
    const menuButton = allButtons[1];
    const heroQuoteButton = allButtons[2];
    const projectsButton = allButtons[3];


    if (headerQuoteButton) {
        headerQuoteButton.addEventListener("click", () => {
            window.location.href = "contact.html";
        });
    }


    if (heroQuoteButton) {
        heroQuoteButton.addEventListener("click", () => {
            window.location.href = "contact.html";
        });
    }


    // ================= VIEW PROJECTS =================

    if (projectsButton) {
        projectsButton.addEventListener("click", () => {
            window.location.href = "projects.html";
        });
    }


    // ================= MENU BUTTON =================

    if (menuButton) {
        menuButton.addEventListener("click", () => {

            const nav = document.querySelector("nav");

            if (nav.style.display === "none") {
                nav.style.display = "flex";
            } else {
                nav.style.display = "none";
            }

        });
    }


    // ================= FLOATING BUTTONS =================

    const floatingButtons = document.querySelectorAll("aside button");

    const chatButton = floatingButtons[0];
    const callButton = floatingButtons[1];


    // Chat Button
    if (chatButton) {
        chatButton.addEventListener("click", () => {
            alert("Welcome to Nemish Engineering! How can we help you?");
        });
    }


    // Call Button
    if (callButton) {
        callButton.addEventListener("click", () => {
            window.location.href = "tel:+911234567890";
        });
    }

});
