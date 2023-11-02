export function ContactsTab() {
    const mainContent = document.querySelector("#content");

    while (mainContent.children.length > 1) {
        mainContent.removeChild(mainContent.lastChild);
    }

    const contactsPage = document.createElement("div");
    contactsPage.classList.add("contacts-page");
    mainContent.appendChild(contactsPage);

    const manager = document.createElement("div");
    const owner = document.createElement("div");
    const managerHeader = document.createElement("h1");
    managerHeader.textContent = "Manager";
    const ownerHeader = document.createElement("h1");
    ownerHeader.textContent = "Owner";
    const managerText = document.createElement("p");
    managerText.textContent =
        "Contact me if you want to book a seat, ask a question about our restaurant's work or have an honest opinion about it:";
    const managerContacts = document.createElement("p");
    managerContacts.textContent = "Jimothy Peppa, 8 (888) 888-88-88";
    const ownerText = document.createElement("p");
    ownerText.textContent =
        "Contact me if you have a business offer and we can work this out together:";
    const ownerContacts = document.createElement("p");
    ownerContacts.textContent = "Michael Scott, 7 (777) 777-77-77";

    manager.classList.add("manager-contacts");
    owner.classList.add("owner-contacts");

    contactsPage.append(owner, manager);
    manager.append(managerHeader, managerText, managerContacts);
    owner.append(ownerHeader, ownerText, ownerContacts);
}
