export function InitialLoad() {
    const mainContent = document.querySelector("#content");

    const navbar = document.createElement("nav");
    mainContent.appendChild(navbar);

    const navHome = document.createElement("div");
    navHome.classList.add("nav-element", "nav-home", "nav-clicked");
    navHome.textContent = "Home";
    const navMenu = document.createElement("div");
    navMenu.classList.add("nav-element", "nav-menu");
    navMenu.textContent = "Menu";
    const navContacts = document.createElement("div");
    navContacts.classList.add("nav-element", "nav-contacts");
    navContacts.textContent = "Contacts";
    navbar.append(navHome, navMenu, navContacts);

    const navElements = document.querySelectorAll(".nav-element");
    const navArray = [...navElements];
    navArray.forEach(function (element) {
        element.addEventListener("click", function () {
            navArray.forEach(function (elem) {
                elem.classList.remove("nav-clicked");
            });

            element.classList.add("nav-clicked");
        });
    });
}
